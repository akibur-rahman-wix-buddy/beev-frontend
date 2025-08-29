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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import ContactUsDialog from "@/components/dialog/ContactUsDialog";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email address")),
  message: z.string().min(1, "Message is required"),
  category: z.string().min(1, "Category is required"),
});

const ContactUsPage = () => {
  const [isContactUsDialogOpen, setIsContactUsDialogOpen] = useState(false);

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Contact Us", url: "#" },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      category: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setIsContactUsDialogOpen(true);
  }

  return (
    <section className="">
      <PrimaryBanner
        bgImg={banner}
        breadcrumbs={breadcrumbs}
        onLeft={true}
        title="Contact Us"
        subTitle="We'd love to hear from you. For questions related to partnerships, press, tech issues, or feedback about the platform, please use the form below."
        maxWidth="max-w-[650px] text-center md:text-left"
      />
      <Container className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20">
        <SectionTitle center>Send a Message to Our Team</SectionTitle>
        <div className="bg-[#F3EDE5] rounded-xl sm:rounded-2xl max-w-[950px] mx-auto pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-8 sm:pb-12 lg:pb-14 xl:pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 border border-[#EDD9C5]">
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 sm:space-y-6 lg:space-y-7"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] sm:text-lg font-medium">
                        Name <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] sm:text-lg font-medium">
                        Email <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Email"
                          className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] sm:text-lg font-medium">
                        Select Category <span className="">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 !h-12 sm:!h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base w-full">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-0 bg-[#FBF7F0] rounded-lg md:rounded-[10px]">
                          <SelectItem
                            value="General Inquiry"
                            className="border-b border-[#E9E4E0] rounded-none py-2 sm:py-3 px-2 text-sm sm:text-base text-[#6F7875]"
                          >
                            General Inquiry
                          </SelectItem>
                          <SelectItem
                            value="Media/Press"
                            className="border-b border-[#E9E4E0] rounded-none py-2 sm:py-3 px-2 text-sm sm:text-base text-[#6F7875]"
                          >
                            Media/Press
                          </SelectItem>
                          <SelectItem
                            value="Technical Support"
                            className="border-b border-[#E9E4E0] rounded-none py-2 sm:py-3 px-2 text-sm sm:text-base text-[#6F7875]"
                          >
                            Technical Support
                          </SelectItem>
                          <SelectItem
                            value="Feedback"
                            className="border-b border-[#E9E4E0] rounded-none py-2 sm:py-3 px-2 text-sm sm:text-base text-[#6F7875]"
                          >
                            Feedback
                          </SelectItem>
                          <SelectItem
                            value="Other"
                            className="rounded-none py-2 sm:py-3 px-2 text-sm sm:text-base text-[#6F7875]"
                          >
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] sm:text-lg font-medium">
                        Message <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Let us know what's on your mind..."
                          className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] h-[160px] sm:h-[200px] lg:h-[220px] !text-sm sm:!text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Submit
                </Button>

                <p className="max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] mx-auto text-center text-[13px] sm:text-[15px] lg:text-[17px] leading-[160%] text-[#8F8D8D]">
                  This form is not for financial, emotional, or thoughtful care
                  needs. If your message relates to any of the above, please
                  visit the{" "}
                  <span className="font-semibold text-textPrimary">
                    "I Have a Need"
                  </span>{" "}
                  form or{" "}
                  <span className="font-semibold text-textPrimary">
                    The Heart Wall
                  </span>
                  , where the community gently holds space.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </Container>
      <ContactUsDialog
        open={isContactUsDialogOpen}
        onOpenChange={setIsContactUsDialogOpen}
      />
    </section>
  );
};

export default ContactUsPage;
