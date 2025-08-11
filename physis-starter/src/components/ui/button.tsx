import * as React from "react";
import { cn } from "@/lib/utils";

export const Button = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm",
      "bg-olive-600 text-white hover:bg-olive-700 focus:outline-none",
      className
    )}
    {...props}
  />
);
