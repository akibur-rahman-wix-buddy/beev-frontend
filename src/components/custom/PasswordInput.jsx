import { EyeOffIcon, EyeOnIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PasswordInput = ({ className, title, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        className={cn(
          "peer border-[#E9E0D7] bg-transparent border-1 rounded-[10px] outline-none py-3 h-[52px] md:h-[60px] px-4 md:px-6 w-full focus:border-2 focus:border-primary transition-colors duration-300 focus:px-4 md:focus:px-6 font-medium aria-invalid:border-destructive text-sm md:text-base",
          className
        )}
        {...props}
      />
      <span
        className={cn(
          props.value
            ? "top-0 left-3 md:left-4 scale-[0.9] bg-[#F9F5F0] -translate-y-1/2 peer-focus:text-primary text-[#707070]"
            : "left-3 md:left-4 top-1/2 -translate-y-1/2 peer-focus:text-primary text-[#707070]",
          "absolute peer-focus:top-0 peer-focus:bg-[#F9F5F0] rounded-[3px]  peer-focus:left-3 md:peer-focus:left-4 peer-focus:scale-[0.9] transition-all duration-300 font-medium px-2 pointer-events-none peer-aria-invalid:text-destructive"
        )}
      >
        {title}
      </span>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeOnIcon className="size-5 md:size-6" />
        ) : (
          <EyeOffIcon  className="size-5 md:size-6" />
        )}
      </button>
    </label>
  );
};

export default PasswordInput;
