import { Card, CardTitle, CardSubtitle } from './ui/card';
import { Badge } from './ui/badge';

export default function WorkoutCard({ name, level, focus, notes }: { name: string; level: string; focus: string; notes?: string; }){
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle className="mt-1">Level: {level} · Focus: {focus}</CardSubtitle>
        </div>
        <Badge>Bodyweight</Badge>
      </div>
      {notes && <p className="mt-3 text-sm text-neutral-700">{notes}</p>}
    </Card>
  );
}
