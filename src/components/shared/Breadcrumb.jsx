import { ForwardIcon } from "@/assets/icons/icons";
import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav className="flex items-center gap-x-1 text-sm text-gray-600 bg-[#F3EDE5] py-5 px-6 rounded-lg font-medium">
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-1 text-lg">
          {index !== 0 && <ForwardIcon />}
          {index !== breadcrumbs.length - 1 ? (
            <Link to={crumb.href}>{crumb.label}</Link>
          ) : (
            <span className="text-primary">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
