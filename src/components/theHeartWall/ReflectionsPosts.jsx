import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, PlusIcon } from "@/assets/icons/icons";
import Post from "../cards/Post";
import Pagination from "../shared/Pagination";
import { Link } from "react-router";

const ReflectionsPosts = () => {
  const posts = [
    {
      id: 1,
      type: "with_comments",
      author: {
        name: "Anonymous",
        avatar: "",
      },
      timestamp: "Posted 2 hour ago",
      title: "A space that reminded me I wasn’t alone",
      content:
        "I found One Heart Society during a really heavy season of my life. What I discovered was more than words, it was small acts of care that made a huge difference: groceries when I didn’t know how I’d eat, a ride when I felt stranded, and thoughtful messages that eased the loneliness. This community reminded me that kindness is still real and gave me space to breathe and believe in people again.",
      likes: 20,
      comments: 7,
      tag: "Heart Wall #1",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Ciara C",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content: "So glad to hear things are moving in the right direction!",
        },
        {
          id: 2,
          author: {
            name: "Mark D",
            avatar: "https://i.ibb.co.com/Lg0HdnS/doctor-profile.png",
          },
          content:
            "Your strength is inspiring. Wishing your daughter the best.",
        },
      ],
    },
    {
      id: 2,
      type: "with_comments",
      author: {
        name: "Mike R",
        avatar: "https://i.ibb.co.com/fYcPSK0y/profile-2.png",
      },
      timestamp: "Posted 3 hours ago",
      title: "Appreciating the resources shared",
      content:
        "I was feeling overwhelmed caring for my parents, but the advice and resources shared by this group gave me direction. I feel less alone and more hopeful now.",
      likes: 14,
      comments: 4,
      tag: "Heart Wall #2",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Lisa K",
            avatar: "https://i.ibb.co.com/d018P7Sf/image.png",
          },
          content: "Happy to hear that! We're all here to support one another.",
        },
      ],
    },
    {
      id: 3,
      type: "with_comments",
      author: {
        name: "David K",
        avatar: "https://i.ibb.co.com/V7XRPhM/image-6-1.png",
      },
      timestamp: "Posted 7 hours ago",
      title: "Encouragement made a difference",
      content:
        "Running my restaurant has been tough, but hearing your stories and encouragement gave me the motivation to keep pushing forward. I’ve started applying new strategies shared here.",
      likes: 22,
      comments: 9,
      tag: "Heart Wall #3",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Maria S",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content: "That’s wonderful! Wishing your restaurant great success.",
        },
        {
          id: 2,
          author: {
            name: "Tom B",
            avatar: "https://i.ibb.co.com/V7XRPhM/image-6-1.png",
          },
          content:
            "Proud of you for not giving up. Keep going, you’ve got this!",
        },
      ],
    },
    {
      id: 4,
      type: "with_comments",
      author: {
        name: "Anonymous",
        avatar: "",
      },
      timestamp: "Posted 12 hours ago",
      title: "Thankful for the housing tips",
      content:
        "I was terrified about finding a place after my landlord sold our building, but the advice here led me to a local program that helped me secure temporary housing. I’m beyond grateful.",
      likes: 28,
      comments: 6,
      tag: "Heart Wall #4",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Alex M",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content: "That’s amazing news! So glad the program could help.",
        },
      ],
    },
    {
      id: 5,
      type: "with_comments",
      author: {
        name: "Emma T",
        avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
      },
      timestamp: "Posted 15 hours ago",
      title: "Support means everything",
      content:
        "Being a single mom is overwhelming, but the encouragement and resources from this group helped me find affordable childcare. I feel lighter knowing I have a community behind me.",
      likes: 40,
      comments: 13,
      tag: "Heart Wall #5",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Sophie R",
            avatar: "https://i.ibb.co.com/V7XRPhM/image-6-1.png",
          },
          content: "So proud of you! You’re doing an amazing job.",
        },
        {
          id: 2,
          author: {
            name: "Hannah L",
            avatar: "https://i.ibb.co.com/fYcPSK0y/profile-2.png",
          },
          content: "Happy you found support. You deserve the best!",
        },
      ],
    },
    {
      id: 6,
      type: "with_comments",
      author: {
        name: "Tony Mcious",
        avatar: "https://i.ibb.co.com/d018P7Sf/image.png",
      },
      timestamp: "Posted 1 hour ago",
      title: "Grateful for the guidance",
      content:
        "Thanks to the suggestions shared here, I found a specialist who could help with my daughter's condition. The emotional support I received from this community has been incredible.",
      likes: 20,
      comments: 7,
      tag: "Heart Wall #1",
      commentsList: [
        {
          id: 1,
          author: {
            name: "Ciara C",
            avatar: "https://i.ibb.co.com/Pr9hpG0/paris2.png",
          },
          content: "So glad to hear things are moving in the right direction!",
        },
        {
          id: 2,
          author: {
            name: "Mark D",
            avatar: "https://i.ibb.co.com/Lg0HdnS/doctor-profile.png",
          },
          content:
            "Your strength is inspiring. Wishing your daughter the best.",
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
          <Button className="rounded-full" asChild>
            <Link to="/add-post">
              <PlusIcon className="size-5 shrink-0" />
              Add Post
            </Link>
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
