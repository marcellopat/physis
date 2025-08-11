import { createServerSupabase } from '@/lib/supabase-client';
import QuoteCard from '@/components/quote-card';

export default async function QuotesPage(){
  const supabase = createServerSupabase();
  const { data: quotes } = await supabase.from('quotes').select('*').limit(50);
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl">Presocratic Quotes</h1>
      {quotes?.map((q:any) => <QuoteCard key={q.id} title_gr={q.title_gr} text_en={q.text_en} author={q.author} />)}
    </div>
  );
}
