import { Card, CardTitle, CardSubtitle } from './ui/card';

export default function QuoteCard({ title_gr, text_en, author }: { title_gr: string; text_en: string; author: string; }){
  return (
    <Card className="prose-quote">
      <CardTitle className="font-display text-2xl">{title_gr}</CardTitle>
      <CardSubtitle className="mt-1 italic text-neutral-600">{author}</CardSubtitle>
      <p className="mt-3 font-serif text-lg leading-relaxed">{text_en}</p>
    </Card>
  );
}
