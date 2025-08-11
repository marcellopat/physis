import Link from 'next/link';
import { Card } from './ui/card';

export default function PaywallBanner(){
  return (
    <Card className="border-terracotta-200 bg-terracotta-50">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-base font-semibold text-terracotta-800">PHÝSIS Pro – Coming soon</h4>
          <p className="text-sm text-terracotta-700">Advanced programs, habit tracking, and unlimited quotes will be available with Pro.</p>
        </div>
        <Link className="rounded-xl bg-terracotta-600 px-3 py-2 text-sm text-white" href={process.env.NEXT_PUBLIC_STRIPE_PRICING_URL || '#'}>Join waitlist</Link>
      </div>
    </Card>
  );
}
