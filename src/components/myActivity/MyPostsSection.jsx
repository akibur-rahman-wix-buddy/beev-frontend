import { ForwardIcon3 } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

const MyPostsSection = () => {
  const posts = [
    {
      title: "This platform gives emotional support when I need it most",
      postedDate: "May 15, 2023",
      status: "Pending",
      responses: 0,
    },
    {
      title: "I had a great experience on here",
      postedDate: "May 15, 2023",
      status: "Active",
      responses: 2,
    },
    {
      title: "Thank you for the support",
      postedDate: "May 15, 2023",
      status: "Active",
      responses: 2,
    },
    {
      title: "Once I joined, this platform gave me hope",
      postedDate: "May 15, 2023",
      status: "Active",
      responses: 2,
    },
    {
      title: "This platform is amazing",
      postedDate: "May 15, 2023",
      status: "Active",
      responses: 2,
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 border border-[#E4DDD2] rounded-lg space-y-3 sm:space-y-4 lg:space-y-5">
      {posts.map((post, index) => (
        <Link
          key={index}
          to={`/post/${index}`}
          className="bg-[#F3EDE5] p-4 sm:p-5 lg:p-6 rounded-[10px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 text-textPrimary"
        >
          <div className="space-y-1 sm:space-y-2 flex-1">
            <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-medium leading-tight">
              {post.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-[16px] text-[#827D77]">
              Posted on: {post.postedDate}
            </p>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-2 lg:gap-3">
            <div
              className={cn(
                "px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 w-fit rounded-full text-sm sm:text-base font-medium",
                post.status === "Active"
                  ? "bg-[#D8EADD] text-[#4FC96F]"
                  : "bg-[#F4E3CC] text-[#F09C25]"
              )}
            >
              {post.status}
            </div>
            {post.responses > 0 && (
              <div className="inline text-nowrap">
                <p className="text-sm sm:text-base lg:text-[16px] inline">
                  {post.responses} responses
                </p>
                <ForwardIcon3 className="inline" />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyPostsSection;
