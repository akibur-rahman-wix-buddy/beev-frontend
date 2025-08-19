import { BackIcon } from "@/assets/icons/icons";
import Post from "@/components/cards/Post";
import Container from "@/components/shared/Container";
import React from "react";
import { Link } from "react-router";

const PostDetailsPage = () => {
  const post = {
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
  };

  return (
    <Container as="section" className="pt-8 pb-20">
      <div className="flex mb-8">
        <Link to={-1} className="">
          <div className="bg-[#F3EDE5] size-14 flex justify-center items-center rounded-lg">
            <BackIcon />
          </div>
        </Link>
      </div>
      <Post post={post} commentEnabled />
    </Container>
  );
};

export default PostDetailsPage;
