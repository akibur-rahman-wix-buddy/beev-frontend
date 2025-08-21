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
