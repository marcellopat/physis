import { cn } from "@/lib/utils";
export default function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-3xl px-4", className)} {...props} />;
}
