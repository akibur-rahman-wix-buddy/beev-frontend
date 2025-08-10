import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, PlusIcon } from "@/assets/icons/icons";
import Post from "../cards/Post";
import Pagination from "../shared/Pagination";

const ReflectionsPosts = () => {
  const posts = [
    {
      id: 2,
      type: "with_comments",
      author: {
        name: "Tony Mcious",
        avatar: "https://i.ibb.co.com/d018P7Sf/image.png",
      },
      timestamp: "Posted 2 hours ago",
      title: "Unexpected medical expenses",
      content:
        "My daughter was recently diagnosed with a rare condition that requires specialized treatment. Our insurance covers some, but we're facing significant out-of-pocket expenses that we hadn't prepared for. Any support or guidance would mean the world to us.",
      likes: 10,
      comments: 10,
      tag: "1",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Ciara C",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content:
            "My daughter was recently diagnosed with a rare condition that requires specialized treatment. Our insurance covers some",
        },
        {
          id: 2,
          author: {
            name: "Ciara C",
            avatar: "https://i.ibb.co.com/Lg0HdnS/doctor-profile.png",
          },
          content:
            "My daughter was recently diagnosed with a rare condition that requires specialized treatment. Our insurance covers some",
        },
      ],
    },
    {
      id: 4,
      type: "with_comments",
      author: {
        name: "Mike R",
        avatar: "https://i.ibb.co.com/fYcPSK0y/profile-2.png",
      },
      timestamp: "Posted 6 hours ago",
      title: "Supporting elderly parents",
      content:
        "My parents are getting older and need more care. I'm trying to balance work, my own family, and taking care of them. It's emotionally and financially draining. Any resources or support groups would be helpful.",
      likes: 8,
      comments: 5,
      tag: "Heart Wall #2",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Lisa K",
            avatar: "https://i.ibb.co.com/d018P7Sf/image.png",
          },
          content:
            "I'm going through something similar. Have you looked into local senior care resources?",
        },
      ],
    },
    {
      id: 6,
      type: "with_comments",
      author: {
        name: "David K",
        avatar: "https://i.ibb.co.com/V7XRPhM/image-6-1.png",
      },
      timestamp: "Posted 10 hours ago",
      title: "Small business struggling",
      content:
        "My small restaurant has been struggling since the pandemic. We're behind on rent and I'm not sure how much longer we can keep the doors open. This business is my life's work and I don't want to give up.",
      likes: 18,
      comments: 12,
      tag: "Heart Wall #3",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Maria S",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content:
            "Have you applied for any small business relief programs? There might be grants available.",
        },
        {
          id: 2,
          author: {
            name: "Tom B",
            avatar: "https://i.ibb.co.com/V7XRPhM/image-6-1.png",
          },
          content:
            "I know how hard it is. My bakery went through similar struggles. Happy to share what worked for us.",
        },
      ],
    },
    {
      id: 8,
      type: "with_comments",
      author: {
        name: "Anonymous",
        avatar: "",
      },
      timestamp: "Posted 14 hours ago",
      title: "Housing crisis",
      content:
        "My landlord is selling the property and I have 30 days to find a new place. Rent prices have skyrocketed and I can't find anything affordable. I'm scared my family might end up homeless.",
      likes: 25,
      comments: 8,
      tag: "Heart Wall #4",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Alex M",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content:
            "Check with local housing assistance programs. They might have emergency rental assistance available.",
        },
      ],
    },
    {
      id: 10,
      type: "with_comments",
      author: {
        name: "Emma T",
        avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
      },
      timestamp: "Posted 18 hours ago",
      title: "Single mom struggling",
      content:
        "I'm a single mom of two young kids and I'm barely keeping my head above water. Childcare costs are eating up most of my paycheck and I'm constantly stressed about money. Looking for any resources or support for single parents.",
      likes: 42,
      comments: 15,
      tag: "Heart Wall #5",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Sophie R",
            avatar: "https://i.ibb.co.com/V7XRPhM/image-6-1.png",
          },
          content:
            "There are some great single parent support groups in the area. I can share some resources with you.",
        },
        {
          id: 2,
          author: {
            name: "Hannah L",
            avatar: "https://i.ibb.co.com/fYcPSK0y/profile-2.png",
          },
          content:
            "I've been there. It gets better. Have you looked into childcare assistance programs?",
        },
      ],
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
          <Button className="rounded-full">
            <PlusIcon className="size-5 shrink-0" />
            Add Post
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

export default ReflectionsPosts;
