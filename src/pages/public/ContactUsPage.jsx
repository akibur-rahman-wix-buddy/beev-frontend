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
      />
      <Container className="my-20">
        <SectionTitle center>Send a Message to Our Team</SectionTitle>
        <div className="bg-[#F3EDE5] rounded-2xl max-w-[950px] mx-auto pt-20 pb-16 px-16 border border-[#EDD9C5]">
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Name <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Email <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Email"
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
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Select Category <span className="">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#FBF7F0] px-6 py-4 !h-[60px] rounded-[10px] !text-base w-full">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-0 bg-[#FBF7F0] rounded-[10px]">
                          <SelectItem
                            value="General Inquiry"
                            className="border-b border-[#E9E4E0] rounded-none py-3 px-2 text-base text-[#6F7875]"
                          >
                            General Inquiry
                          </SelectItem>
                          <SelectItem
                            value="Media/Press"
                            className="border-b border-[#E9E4E0] rounded-none py-3 px-2 text-base text-[#6F7875]"
                          >
                            Media/Press
                          </SelectItem>
                          <SelectItem
                            value="Technical Support"
                            className="border-b border-[#E9E4E0] rounded-none py-3 px-2 text-base text-[#6F7875]"
                          >
                            Technical Support
                          </SelectItem>
                          <SelectItem
                            value="Feedback"
                            className="border-b border-[#E9E4E0] rounded-none py-3 px-2 text-base text-[#6F7875]"
                          >
                            Feedback
                          </SelectItem>
                          <SelectItem
                            value="Other"
                            className="rounded-none py-3 px-2 text-base text-[#6F7875]"
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
                      <FormLabel className="text-lg font-medium">
                        Message <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Let us know what’s on your mind..."
                          className="bg-[#FBF7F0] px-6 py-4 rounded-[10px] h-[220px] !text-base"
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

                <p className="max-w-[70%] mx-auto text-center text-[17px] text-[#8F8D8D]">
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
