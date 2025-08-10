import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, PlusIcon } from "@/assets/icons/icons";
import Post from "../cards/Post";
import Pagination from "../shared/Pagination";

const FeaturedNeedsPosts = () => {
  const posts = [
    {
      id: 1,
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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Posts</h2>
        <div className="flex gap-2">
          <Button variant="outlineSecondary">
            <FilterIcon className="size-5 shrink-0" />
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
