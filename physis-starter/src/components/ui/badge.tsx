import * as React from "react";
import { cn } from "@/lib/utils";

export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs", "bg-terracotta-100 text-terracotta-700", className)} {...props} />
);
