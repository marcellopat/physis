import { createServerSupabase } from '@/lib/supabase-client';
import QuoteCard from '@/components/quote-card';
import PaywallBanner from '@/components/paywall-banner';

export default async function Home(){
  const supabase = createServerSupabase();
  const { data: quote } = await supabase.from('quotes').select('*').order('id', { ascending: true }).limit(1).single();
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl">Today’s Thought</h1>
      {quote && <QuoteCard title_gr={quote.title_gr} text_en={quote.text_en} author={quote.author} />}
      <PaywallBanner />
    </div>
  );
}
