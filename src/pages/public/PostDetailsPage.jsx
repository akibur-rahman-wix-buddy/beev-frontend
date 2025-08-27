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
    <Container
      as="section"
      className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20"
    >
      <div className="flex">
        <Link to={-1} className="">
          <div className="bg-[#F3EDE5] size-10 sm:size-12 xl:size-14 flex justify-center items-center rounded-md sm:rounded-lg hover:bg-[#E8DFD4] transition-colors">
            <BackIcon className="size-7 sm:size-9 xl:size-11" />
          </div>
        </Link>
      </div>
      <Post
        post={post}
        className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10"
        commentEnabled
      />
    </Container>
  );
};

export default PostDetailsPage;
