import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, PlusIcon } from "@/assets/icons/icons";
import Post from "../cards/Post";

const ReflectionsPosts = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Posts</h2>
        <div className="flex gap-2">
          <Button variant="outlineSecondary">
            <FilterIcon className="size-5 shrink-0" />
            Filter
          </Button>
          <Button className="rounded-full">
            <PlusIcon className="size-5 shrink-0" />
            Add Post
          </Button>
        </div>
      </div>
      {Array(9)
        .fill()
        .map((_, index) => (
          <Post key={index} />
        ))}
    </div>
  );
};

export default ReflectionsPosts;
