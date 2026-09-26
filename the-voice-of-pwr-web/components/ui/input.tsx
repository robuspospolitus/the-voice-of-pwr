import * as React from "react";
import { cn } from "cn";
import { cva, VariantProps } from "class-variance-authority";
const inputVariants = cva(
  "w-full min-w-0 rounded-lg border bg-transparent text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive md:text-sm",
  {
    variants: {
      variant: {
        default: "h-8 border-input px-2.5 py-1",
        opinionForm: "px-2 py-2 h-11",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
