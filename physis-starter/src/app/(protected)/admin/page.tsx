import { createServerSupabase } from '@/lib/supabase-client';
import { ADMIN_EMAILS } from '@/lib/config';

export default async function AdminPage(){
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = !!user?.email && ADMIN_EMAILS.includes(user.email.toLowerCase());
  if(!isAdmin) return <p>Not authorized.</p>;
  const { data: stats } = await supabase.rpc('physis_stats');
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl">Admin</h1>
      <pre className="rounded-xl bg-neutral-50 p-4 text-sm">{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
}
