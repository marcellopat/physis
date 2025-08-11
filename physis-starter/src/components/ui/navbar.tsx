'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-20 border-b border-olive-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-serif text-2xl">PHÝSIS</Link>
        <div className="flex gap-4 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/quotes", label: "Quotes" },
            { href: "/workouts", label: "Workouts" },
            { href: "/account", label: "Account" }
          ].map(i => (
            <Link key={i.href} href={i.href} className={cn("rounded-xl px-3 py-1", pathname === i.href && "bg-olive-100")}>{i.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
