import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={cn(
      "w-full rounded-2xl border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-300",
      className
    )}
    {...props}
  />
);
