import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return (
    (<OTPInput
      data-slot="input-otp"
      containerClassName={cn("grid grid-cols-6 gap-5", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props} />)
  );
}

function InputOTPGroup({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="input-otp-group"
      className={cn("", className)}
      {...props} />)
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    (<div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-primary/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-[#D8D1CD] relative flex items-center justify-center border-y border-r shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px] w-full !aspect-square !rounded-[13px] data-[active=true]:border-primary text-xl font-medium",
        className
      )}
      {...props}>
      {char}
      {hasFakeCaret && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>)
  );
}

function InputOTPSeparator({
  ...props
}) {
  return (
    (<div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>)
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
