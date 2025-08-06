import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  as,
  children,
  className,
  fluid = false,
  center = false,
  ...rest
}) => {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        fluid
          ? "w-full px-4"
          : "max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 w-full",
        center && "flex justify-center",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Container;
