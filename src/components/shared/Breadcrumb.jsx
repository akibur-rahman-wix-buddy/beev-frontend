import { ForwardIcon } from "@/assets/icons/icons";
import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav className="flex items-center gap-1 sm:gap-2 text-[#22352E] bg-[#F3EDE5] py-3 sm:py-4 lg:py-5 px-4 sm:px-5 lg:px-6 rounded-lg md:rounded-[10px] overflow-x-auto">
      <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 min-w-fit">
        {breadcrumbs.map((crumb, index) => (
          <span
            key={index}
            className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 text-[15px] md:text-base lg:text-lg font-medium whitespace-nowrap"
          >
            {index !== 0 && (
              <ForwardIcon className="size-4.5 sm:size-5.5 lg:size-6 flex-shrink-0" />
            )}
            {index !== breadcrumbs.length - 1 ? (
              <Link
                to={crumb.url}
                className="hover:scale-105 origin-left transition-transform duration-200"
                title={crumb.label}
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-primary" title={crumb.label}>
                {crumb.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
