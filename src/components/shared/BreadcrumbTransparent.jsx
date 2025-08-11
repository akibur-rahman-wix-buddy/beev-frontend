import { ForwardIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

const BreadcrumbTransparent = ({ breadcrumbs, className }) => {
  return (
    <nav
      className={cn(
        `flex items-center gap-x-1 text-sm text-white rounded-lg font-medium`,
        className
      )}
    >
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-1 text-lg">
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
