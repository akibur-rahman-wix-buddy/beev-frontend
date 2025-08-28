import { ForwardIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

const BreadcrumbTransparent = ({ breadcrumbs, className }) => {
  return (
    <nav
      className={cn(
        `flex items-center gap-x-0.5 sm:gap-x-1 text-sm sm:text-base lg:text-lg text-white font-medium`,
        className
      )}
    >
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-1">
          {index !== 0 && <ForwardIcon className="stroke-white" />}
          {index !== breadcrumbs.length - 1 ? (
            <Link to={crumb.url}>{crumb.label}</Link>
          ) : (
            <span className="text-primary">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default BreadcrumbTransparent;
