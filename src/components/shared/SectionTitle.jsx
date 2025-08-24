import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({
  children,
  description = "",
  center = false,
  fromauth = false,
  className = "",
}) => {
  return (
    <div
      className={cn(
        `mb-6 md:mb-8 xl:mb-10 md:space-y-1 lg:space-y-2 max-w-[80%]`,
        { "text-center mx-auto": center },
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl xl:text-4xl leading-[130%] font-semibold">
        {children}
      </h2>
      {description && (
        <p className={cn("md:text-lg leading-[150%] md:leading-[170%]", { "text-[#707070] font-medium": fromauth })}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
