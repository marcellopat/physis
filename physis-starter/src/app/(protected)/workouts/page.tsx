import { createServerSupabase } from '@/lib/supabase-client';
import WorkoutCard from '@/components/workout-card';

export default async function WorkoutsPage(){
  const supabase = createServerSupabase();
  const { data: workouts } = await supabase.from('workouts').select('*').order('id');
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl">Workouts</h1>
      {workouts?.map((w:any) => <WorkoutCard key={w.id} name={w.name} level={w.level} focus={w.focus} notes={w.notes || ''} />)}
    </div>
  );
}
