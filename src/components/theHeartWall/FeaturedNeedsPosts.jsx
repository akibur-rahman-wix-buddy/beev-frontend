import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, PlusIcon } from "@/assets/icons/icons";
import Pagination from "../shared/Pagination";
import Post from "../cards/Post";

const FeaturedNeedsPosts = () => {
  const posts = [
    {
      id: 1,
      heartId: 27,
      type: "simple",
      author: {
        name: "Admin",
        avatar: "https://i.ibb.co.com/rKgQdLhv/profile.png",
      },
      timestamp: "Posted 2 hours ago",
      title: "Unexpected medical expenses",
      content:
        "My daughter was recently diagnosed with a rare condition that requires specialized treatment. Our insurance covers some, but we're facing significant out-of-pocket expenses that we hadn't prepared for. Any support or guidance would mean the world to us.",
      likes: 10,
    },
    {
      id: 3,
      heartId: 26,
      type: "simple",
      author: {
        name: "Admin",
        avatar: "https://i.ibb.co.com/rKgQdLhv/profile.png",
      },
      timestamp: "Posted 4 hours ago",
      title: "Job loss and financial stress",
      content:
        "I was laid off from my job last month and I'm struggling to make ends meet. The job market is tough right now and I'm worried about paying rent next month. Looking for any advice or opportunities.",
      likes: 15,
    },
    {
      id: 5,
      heartId: 25,
      type: "simple",
      author: {
        name: "Admin",
        avatar: "https://i.ibb.co.com/rKgQdLhv/profile.png",
      },
      timestamp: "Posted 8 hours ago",
      title: "Student loan debt overwhelming",
      content:
        "I graduated two years ago and my student loan payments are crushing me. I can barely afford basic necessities after paying my loans each month. Looking for advice on loan forgiveness programs or budgeting tips.",
      likes: 22,
    },
    {
      id: 7,
      heartId: 24,
      type: "simple",
      author: {
        name: "Admin",
        avatar: "https://i.ibb.co.com/rKgQdLhv/profile.png",
      },
      timestamp: "Posted 12 hours ago",
      title: "Mental health support needed",
      content:
        "I've been dealing with anxiety and depression for months now. Therapy is expensive and I can't afford regular sessions. Looking for affordable mental health resources or support groups in the area.",
      likes: 31,
    },
    {
      id: 9,
      heartId: 23,
      type: "simple",
      author: {
        name: "Admin",
        avatar: "https://i.ibb.co.com/rKgQdLhv/profile.png",
      },
      timestamp: "Posted 16 hours ago",
      title: "Car broke down, can't get to work",
      content:
        "My car died and I can't afford to fix it. I need it to get to work and I'm worried about losing my job. Public transportation isn't reliable in my area. Any suggestions for affordable car repair or transportation alternatives?",
      likes: 14,
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold">Posts</h2>
        <div className="flex gap-2">
          <Button
            variant="outlineSecondary"
            className="flex items-center gap-2 text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 lg:px-8"
          >
            <FilterIcon className="size-4 sm:size-5 lg:size-6" />
            Filter
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {posts.map((item, index) => (
          <Post key={index} post={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default FeaturedNeedsPosts;
