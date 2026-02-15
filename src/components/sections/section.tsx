import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/components/ui/utils";

const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-background/50",
      muted: "bg-muted/60",
      plain: "bg-transparent",
    },
    padding: {
      default: "py-20",
      hero: "pt-24 pb-16",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export function Section({ className, variant, padding, ...props }: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ variant, padding }), className)}
      {...props}
    />
  );
}
