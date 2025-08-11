import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import StaticSupportTypeDetails from "@/components/cards/StaticSupportTypeDetails";
import { Textarea } from "@/components/ui/textarea";
import { BiDollar } from "react-icons/bi";
import HaveNeedDialog from "@/components/dialog/HaveNeedDialog";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email address" }),
  typeOfSupport: z.string().min(1, "Please select a type of support"),
  descriptionAboutYourNeed: z
    .string()
    .min(1, "Please tell us more about your need"),
  howCanWeSupportYou: z.string().optional(),
  amountOfSupport: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num > 0 && num <= 100;
    }, "Please enter a valid amount between $1 and $100"),
  supportMethod: z.string().min(1, "Please select a support method"),
});

const HaveANeedPage = () => {
  const [isHaveNeedDialogOpen, setIsHaveNeedDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      typeOfSupport: "",
      descriptionAboutYourNeed: "",
      howCanWeSupportYou: "",
      amountOfSupport: "",
      supportMethod: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setIsHaveNeedDialogOpen(true);
  }
  return (
    <Container as="section" className="pt-28">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "I Have A Need", url: "#" },
        ]}
      />
      <section className="pt-10 space-y-10 pb-20">
        <div className="text-center pt-10">
          <h2 className="text-4xl font-semibold mb-5">
            What’s Weighing on Your Heart Right Now?
          </h2>
          <div className="max-w-[680px] mx-auto text-lg">
            <p>
              One Heart Society is here to honor what you're going through. If
              you’re in need, you are welcome to share your story with us.
            </p>
            <p>
              We can’t guarantee help, but we promise to receive your words with
              care and do our best to offer support if and when we can.
            </p>
          </div>
        </div>
        <div className="bg-[#F3EDE5] py-20 rounded-lg">
          <div className="max-w-[950px] mx-auto">
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
                  name="typeOfSupport"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-lg font-medium">
                        Select the type of support that best fits your current
                        need *
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-5 bg-[#FBF7F0] p-8 rounded-lg"
                        >
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="Financial" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              Financial -{" "}
                              <span className="text-[#898682]">
                                Support with small but urgent needs like meals,
                                personal items, or transit fare, etc
                              </span>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="Emotional" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              Emotional -{" "}
                              <span className="text-[#898682]">
                                Support with grief, stress, or emotional
                                heaviness
                              </span>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="Thoughtful" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              <p>
                                Thoughtful -{" "}
                                <span className="text-[#898682]">
                                  A kind gesture like supportive words from our
                                  community, a small token of recognition on a
                                  special day or simply tell us how you'd like
                                  to be held in this moment
                                </span>
                              </p>
                            </FormLabel>
                          </FormItem>
                          <hr className="border-t border-[#EEE9E2]" />
                          <StaticSupportTypeDetails />
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="descriptionAboutYourNeed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Tell us more about your need <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please share as openly and honestly as you feel comfortable. The more we understand, the better we can respond with care..."
                          className="bg-[#FBF7F0] px-6 py-4 rounded-[10px] h-[240px] !text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="howCanWeSupportYou"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        How would you feel most supported right now?{" "}
                        <span className="text-[#726968]">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share how we could best show up for you right now..."
                          className="bg-[#FBF7F0] px-6 py-4 rounded-[10px] h-[280px] !text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amountOfSupport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        How much support are you requesting?{" "}
                        <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Enter amount (max $100)"
                            className="bg-[#FBF7F0] px-6 py-4 pl-12 h-[60px] rounded-[10px] !text-base"
                            {...field}
                          />
                          <BiDollar className="absolute size-6 left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="supportMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-lg font-medium">
                        If we’re able to respond to your need, what’s the best
                        way to send support? <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-5 bg-[#FBF7F0] p-8 rounded-lg"
                        >
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="Cash App" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              Cash App
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="PayPal" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              PayPal
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      <HaveNeedDialog open={isHaveNeedDialogOpen} onOpenChange={setIsHaveNeedDialogOpen} />
    </Container>
  );
};

export default HaveANeedPage;
