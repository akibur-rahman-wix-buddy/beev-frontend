import React, { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import postPlaceholder from "@/assets/images/post-placeholder.png";
import profile from "@/assets/images/profile.png";
import { LoveFillIcon, LoveIcon } from "@/assets/icons/icons";

const Post = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const [isLoved, setIsLoved] = useState(false);

  return (
    <div className="p-8 bg-[#F3EDE5] rounded-xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={profile || postPlaceholder} //src={post.author.avatar || postPlaceholder}
            alt={post.author.name}
            className="size-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{post.author.name}</h3>
            <p className="text-[#8F8D8D]">{post.timestamp}</p>
          </div>
        </div>
        {post.tag && (
          <div className="flex items-center gap-2 text-pink-400">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{post.tag}</span>
          </div>
        )}
      </div>
      <div className="pl-20">
        {/* Content */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
          <p className="text-[#716F6E] leading-relaxed">{post.content}</p>
        </div>
        <hr className="my-6 border-t border-[#E0DAD4]" />

        {/* Actions */}
        <div className="flex items-center gap-6 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLoved(!isLoved)}
              className="cursor-pointer"
            >
              {isLoved ? (
                <LoveFillIcon className="size-6" />
              ) : (
                <LoveIcon className="size-6" />
              )}
            </button>
            <span className="text-lg font-medium">{post.likes} Likes</span>
          </div>
          {post.type === "with_comments" && (
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">{post.comments} Comments</span>
            </div>
          )}
        </div>

        {/* Comments Section - Only for posts with comments */}
        {post.type === "with_comments" && (
          <div className="border-t border-gray-200 pt-6">
            {/* Existing Comments */}
            {post.commentsList &&
              post.commentsList.map((comment) => (
                <div key={comment.id} className="flex gap-3 mb-4">
                  <img
                    src={comment.author.avatar || "/placeholder.svg"}
                    alt={comment.author.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      {comment.author.name}
                    </h4>
                    <p className="text-gray-700 text-sm">{comment.content}</p>
                  </div>
                </div>
              ))}

            {/* Comment Input */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Leave a kind comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Send className="w-5 h-5 text-pink-400" />
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Your message will be shared after review to keep this space safe
              and kind.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
