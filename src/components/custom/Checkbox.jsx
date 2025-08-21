import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}) {
  return (
    (<CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border-textPrimary text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-5 shrink-0 rounded-full shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer border-[2.5px]",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="relative flex items-center justify-center">
        <CircleIcon className="text-textPrimary fill-textPrimary absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>)
  );
}

export { Checkbox }
