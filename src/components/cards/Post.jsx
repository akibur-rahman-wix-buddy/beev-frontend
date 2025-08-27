import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import postPlaceholder from "@/assets/images/post-placeholder.png";
import { ForwardMailIcon, LoveFillIcon, LoveIcon } from "@/assets/icons/icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  comment: z.string().min(2, {
    message: "Comment must be at least 2 characters.",
  }),
});

const Post = ({ post, className, commentEnabled = false }) => {
  const [isCommentSectionOpen, setIsCommentSectionOpen] =
    useState(commentEnabled);
  const [isLoved, setIsLoved] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    form.reset();
  }

  return (
    <div className={cn("p-5 sm:p-6 lg:p-8 bg-[#F3EDE5] rounded-lg sm:rounded-[10px]", className)}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={post.author.avatar || postPlaceholder} //src={post.author.avatar || postPlaceholder}
            alt={post.author.name}
            className="size-12 sm:size-14 lg:size-16 rounded-full object-cover shrink-0"
          />
          <div>
            <h3 className="font-semibold text-base sm:text-lg">
              {post.author.name}
            </h3>
            <p className="text-[#8F8D8D] text-sm sm:text-base">
              {post.timestamp}
            </p>
          </div>
        </div>
        {post.heartId && (
          <div className="flex items-center gap-2 text-lg sm:text-xl text-primary ml-auto sm:ml-0">
            <Heart className="size-4 sm:size-5 fill-current" />
            <span className="font-medium text-sm sm:text-base">
              Heart #{post.heartId}
            </span>
          </div>
        )}
      </div>
      <div className="pl-0 sm:pl-16 lg:pl-20">
        {/* Content */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
            {post.title}
          </h2>
          <p className="text-[#716F6E] leading-relaxed text-sm sm:text-base">
            {post.content}
          </p>
        </div>
        <hr className="my-4 sm:my-6 border-t border-[#E0DAD4]" />

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 min-w-[100px] sm:min-w-[120px]">
            <button
              onClick={() => setIsLoved(!isLoved)}
              className="cursor-pointer"
            >
              {isLoved ? (
                <LoveFillIcon className="size-5 sm:size-6" />
              ) : (
                <LoveIcon className="size-5 sm:size-6" />
              )}
            </button>
            <span className="text-base sm:text-lg font-medium">
              {isLoved ? post.likes + 1 : post.likes} Likes
            </span>
          </div>
          {post.type === "with_comments" && (
            <div
              className="flex items-center gap-2 cursor-pointer select-none min-w-[120px] sm:min-w-[140px]"
              onClick={() => setIsCommentSectionOpen((prev) => !prev)}
            >
              <MessageCircle className="size-5 sm:size-6 text-textPrimary" />
              <span className="text-base sm:text-lg font-medium">
                {post.comments} Comments
              </span>
            </div>
          )}
        </div>

        {post.type === "with_comments" && isCommentSectionOpen && (
          <div className="border-gray-200 pt-4 sm:pt-6">
            {post.commentsList &&
              post.commentsList.map((comment) => (
                <div key={comment.id} className="flex flex-col mb-4">
                  <div className="flex items-center gap-3">
                    <figure className="size-10 sm:size-12 rounded-full overflow-hidden shrink-0">
                      <img
                        src={comment.author.avatar || "/placeholder.svg"}
                        alt={comment.author.name}
                        className="size-full object-cover object-center"
                      />
                    </figure>
                    <h4 className="font-medium text-gray-900 text-base sm:text-lg">
                      {comment.author.name}
                    </h4>
                  </div>
                  <p className="text-[#716F6E] pl-[52px] sm:pl-[60px] text-sm sm:text-base">
                    {comment.content}
                  </p>
                </div>
              ))}

            <div className="mt-4 sm:mt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              placeholder="Leave a kind comment..."
                              className="pl-6 sm:pl-7 pr-11 sm:pr-16 py-3 sm:py-4.5 h-auto rounded-full bg-[#FBF7F0] text-sm sm:text-base"
                              {...field}
                            />
                          </FormControl>
                          <button
                            type="submit"
                            className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                          >
                            <ForwardMailIcon className="size-5 sm:size-7" />
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              <p className="text-xs sm:text-sm text-[#8D8888] text-center mt-4">
                Your comment will be shared after review to keep this space safe
                and kind.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
