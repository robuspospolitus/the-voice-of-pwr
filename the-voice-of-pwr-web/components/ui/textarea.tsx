import * as React from "react";
import { cn } from "cn";
import { cva, VariantProps } from "class-variance-authority";

const textareaVariant = cva(
  "flex field-sizing-content min-h-16 w-full rounded-lg border bg-transparent text-base transition-colors outline-none placeholder:text-muted-foreground  focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:text-sm",
  {
    variants: {
      variant: {
        default: "border-input px-2.5 py-2",
        opinionForm: "px-2 py-2 resize-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariant>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariant({ variant, className }))}
      {...props}
    />
  );
}

export { Textarea, textareaVariant };
