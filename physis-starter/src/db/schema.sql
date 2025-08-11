create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists onboarding (
  user_id uuid primary key references auth.users(id) on delete cascade,
  goals text,
  level text,
  created_at timestamptz default now()
);

create table if not exists quotes (
  id bigserial primary key,
  author text not null,
  title_gr text not null,
  text_en text not null
);

create table if not exists workouts (
  id bigserial primary key,
  name text not null,
  level text not null,
  focus text not null,
  notes text
);

create table if not exists user_workouts (
  user_id uuid references auth.users(id) on delete cascade,
  workout_id bigint references workouts(id) on delete cascade,
  done_at timestamptz default now(),
  primary key (user_id, workout_id, done_at)
);

create table if not exists chats (
  id bigserial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  message text not null,
  role text not null check (role in ('user','assistant')),
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table onboarding enable row level security;
alter table user_workouts enable row level security;

create policy "own profile" on profiles for select using (id = auth.uid());
create policy "maintain own profile" on profiles for insert with check (id = auth.uid());
create policy "update own profile" on profiles for update using (id = auth.uid());

create policy "own onboarding" on onboarding for select using (user_id = auth.uid());
create policy "ins own onboarding" on onboarding for insert with check (user_id = auth.uid());
create policy "upd own onboarding" on onboarding for update using (user_id = auth.uid());

create policy "own workouts" on user_workouts for select using (user_id = auth.uid());
create policy "ins own workouts" on user_workouts for insert with check (user_id = auth.uid());

create or replace function physis_stats() returns json as $$
  declare
    users_count bigint;
    quotes_count bigint;
    workouts_count bigint;
  begin
    select count(*) into users_count from auth.users;
    select count(*) into quotes_count from quotes;
    select count(*) into workouts_count from workouts;
    return json_build_object(
      'users', users_count,
      'quotes', quotes_count,
      'workouts', workouts_count
    );
  end;
$$ language plpgsql security definer;
