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

const formSchema = z.object({
  comment: z.string().min(2, {
    message: "Comment must be at least 2 characters.",
  }),
});

const Post = ({ post, commentEnabled = false }) => {
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
    <div className="p-8 bg-[#F3EDE5] rounded-xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={post.author.avatar || postPlaceholder} //src={post.author.avatar || postPlaceholder}
            alt={post.author.name}
            className="size-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{post.author.name}</h3>
            <p className="text-[#8F8D8D]">{post.timestamp}</p>
          </div>
        </div>
        {post.type === "with_comments" && (
          <div className="flex items-center gap-2 text-xl text-primary">
            <Heart className="size-5 fill-current" />
            <span className="font-medium">Heart Wall #{post.id}</span>
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
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => setIsCommentSectionOpen((prev) => !prev)}
            >
              <MessageCircle className="size-6 text-textPrimary" />
              <span className="text-lg font-medium">
                {post.comments} Comments
              </span>
            </div>
          )}
        </div>

        {post.type === "with_comments" && isCommentSectionOpen && (
          <div className="border-gray-200 pt-6">
            {post.commentsList &&
              post.commentsList.map((comment) => (
                <div key={comment.id} className="flex flex-col mb-4">
                  <div className="flex items-center gap-3">
                    <figure className="size-12 rounded-full overflow-hidden shrink-0">
                      <img
                        src={comment.author.avatar || "/placeholder.svg"}
                        alt={comment.author.name}
                        className="size-full object-cover object-center"
                      />
                    </figure>
                    <h4 className="font-medium text-gray-900 text-lg">
                      {comment.author.name}
                    </h4>
                  </div>
                  <p className="text-[#716F6E] pl-[60px]">{comment.content}</p>
                </div>
              ))}

            <div className="mt-6">
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
                              className="pl-7 pr-16 py-4.5 h-auto rounded-full bg-[#FBF7F0]"
                              {...field}
                            />
                          </FormControl>
                          <button
                            type="submit"
                            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                          >
                            <ForwardMailIcon className="size-7" />
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              <p className="text-sm text-[#8D8888] text-center mt-4">
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
