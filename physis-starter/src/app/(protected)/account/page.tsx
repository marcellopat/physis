import { createServerSupabase } from '@/lib/supabase-client';
import { Card } from '@/components/ui/card';

export default async function AccountPage(){
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  const email = user?.email || '';
  return (
    <Card>
      <h2 className="text-xl font-semibold">Account</h2>
      <p className="mt-2 text-sm text-neutral-700">Signed in as {email}</p>
    </Card>
  );
}
