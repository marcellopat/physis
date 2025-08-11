import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(url, key);

async function main(){
  const quotes = [
    {
      author: 'Thales of Miletus',
      title_gr: 'Πάντα πλήρη θεῶν',
      text_en: 'All things are full of gods: a reminder that nature hums with unseen order, and that wisdom begins by paying attention to what is already alive around us.'
    },
    {
      author: 'Anaximander',
      title_gr: 'ἐξ ὧν δὲ ἡ γένεσίς ἐστι…',
      text_en: 'From where things arise, there too they perish, in due order. Everything returns: the world is a breath that widens and gathers, a law of balance we only briefly interrupt.'
    },
    {
      author: 'Heraclitus',
      title_gr: 'Πάντα ῥεῖ',
      text_en: 'Everything flows. We step into the river and we are new each time; practice becomes character when we embrace change as the ground under our feet.'
    },
    {
      author: 'Parmenides',
      title_gr: 'ἔστι γὰρ εἶναι',
      text_en: 'What-is, is. Stand still long enough and reality clarifies: not in the noise of opinions, but in the stance you uphold every day.'
    }
  ];

  await supabase.from('quotes').upsert(quotes);

  const workouts = [
    { name: 'Morning Breath & Mobility', level: 'Beginner', focus: 'Mobility', notes: '5 min nasal breathing, 8 min spine + hips flow.' },
    { name: 'Strength Minimum', level: 'Intermediate', focus: 'Strength', notes: '3x (pushups, squats, rows), 20 min total.' },
    { name: 'Evening Unwind', level: 'All', focus: 'Recovery', notes: '10 min stretch + 5 min journaling.' }
  ];
  await supabase.from('workouts').upsert(workouts);

  console.log('Seed completed');
}

main().catch(err => { console.error(err); process.exit(1); });
