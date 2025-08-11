import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase-client";

export async function requireUser() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/login");
  return data.user;
}
