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
    <div className="p-12 border border-[#E4DDD2] rounded-lg space-y-5">
      {posts.map((post, index) => (
        <Link
          key={index}
          to={`/post/${index}`}
          className="bg-[#F3EDE5] p-6 rounded-[10px] flex justify-between items-center text-textPrimary"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-medium">{post.title}</h3>
            <p className="text-[16px] text-[#827D77]">
              Posted on: {post.postedDate}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div
              className={cn(
                "px-6 py-2 w-fit rounded-full font-medium",
                post.status === "Active"
                  ? "bg-[#D8EADD] text-[#4FC96F]"
                  : "bg-[#F4E3CC] text-[#F09C25]"
              )}
            >
              {post.status}
            </div>
            {post.responses > 0 && (
              <div className="inline-flex">
                <p className="text-[16px]">{post.responses} responses</p>
                <ForwardIcon3 />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyPostsSection;
