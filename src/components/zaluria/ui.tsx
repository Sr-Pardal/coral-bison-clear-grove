import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xs font-medium tracking-[0.28em] text-emerald uppercase">
      {children}
    </p>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "line";
}) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-40",
        variant === "primary" && "bg-titanium text-cosmos hover:bg-ink",
        variant === "ghost" && "bg-transparent text-ink hover:bg-surface-2",
        variant === "line" &&
          "bg-transparent text-titanium shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Media({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("media block h-full w-full object-cover", className)}
    />
  );
}
