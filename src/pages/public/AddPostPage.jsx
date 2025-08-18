import PrimaryBanner from "@/components/shared/PrimaryBanner";
import banner from "@/assets/images/banners/contuct-us-banner.png";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import HeartWallGuideDialog from "@/components/dialog/HeartWallGuideDialog";

const formSchema = z.object({
  postTitle: z.string().min(1, "Headline is required"),
  postDetails: z.string().min(1, "Post details are required"),
  anonymously: z.boolean().optional(),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "You need to accept the guidelines",
  }),
});

const AddPostPage = () => {
  const [isHeartWallGuideDialogOpen, setIsHeartWallGuideDialogOpen] =
    useState(false);

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Heart Wall", url: "/the-heart-wall" },
    { label: "Add Post", url: "#" },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postTitle: "",
      postDetails: "",
      anonymously: false,
      acceptedTerms: false,
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="">
      <PrimaryBanner
        bgImg={banner}
        breadcrumbs={breadcrumbs}
        onLeft={true}
        title="Share Your Thoughts With Us"
        subTitle="This space is for your voice. You can share reflections, gratitude, encouragement, or anything resting on your heart."
        maxWWidth="max-w-[650px]"
      />
      <Container className="my-20">
        <SectionTitle center>
          Share a Thought, Reflection, or a Thank You
        </SectionTitle>
        <div className="bg-[#F3EDE5] rounded-2xl max-w-[950px] mx-auto pt-20 pb-16 px-16 border border-[#EDD9C5]">
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7"
              >
                <FormField
                  control={form.control}
                  name="postTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Give your post a short headline{" "}
                        <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Add a short headline (i.e. “A small act that meant so much”)"
                          className="bg-[#FBF7F0] px-6 py-4 h-[60px] rounded-[10px] !text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        What would you like to share?{" "}
                        <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write from the heart. Share a moment of kindness or support that mattered to you..."
                          className="bg-[#FBF7F0] px-6 py-4 rounded-[10px] h-[300px] !text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="anonymously"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="cursor-pointer border-[#707070] border-2 rounded size-[18px]"
                          />
                        </FormControl>
                        <FormLabel className="text-[#707070] cursor-pointer text-[17px]">
                          Send Anonymously
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="acceptedTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="cursor-pointer border-[#707070] border-2 rounded size-[18px]"
                          />
                        </FormControl>
                        <FormLabel className="text-[#707070] cursor-pointer text-[17px]">
                          I’ve read and agree to the{" "}
                        </FormLabel>
                        <span
                          className="text-primary text-[17px] hover:underline cursor-pointer"
                          onClick={() => setIsHeartWallGuideDialogOpen(true)}
                        >
                          The Heart Wall Guidelines
                        </span>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Share on The Heart Wall
                </Button>

                <p className="max-w-[70%] mx-auto text-center text-[17px] text-[#8F8D8D]">
                  Your post will be reviewed before it goes live to help keep
                  this a safe and supportive space
                </p>
              </form>
            </Form>
          </div>
        </div>
      </Container>
      <HeartWallGuideDialog
        open={isHeartWallGuideDialogOpen}
        onOpenChange={setIsHeartWallGuideDialogOpen}
      />
    </section>
  );
};

export default AddPostPage;
