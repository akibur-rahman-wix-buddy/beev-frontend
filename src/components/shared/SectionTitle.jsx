import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ children, description = "", center = false, className = "" }) => {
  return (
    <div className={cn(`mb-10 space-y-2`, { "text-center": center }, className)}>
      <h2 className="text-4xl leading-[130%] font-semibold">{children}</h2>
      {description && <p className="text-lg">{description}</p>}
    </div>
  );
};

export default SectionTitle;
