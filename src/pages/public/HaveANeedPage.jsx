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

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .pipe(z.email("Please enter a valid email address")),
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
    supportCashAppHandle: z.string().optional(),
    supportPayPalHandle: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Cash App validation
    if (data.supportMethod === "Cash App" && !data.supportCashAppHandle) {
      ctx.addIssue({
        path: ["supportCashAppHandle"], // ✅ attaches error to this field
        message: "Cash App handle is required",
        code: "custom",
      });
    }

    // PayPal validation
    if (data.supportMethod === "PayPal") {
      if (!data.supportPayPalHandle) {
        ctx.addIssue({
          path: ["supportPayPalHandle"],
          message: "PayPal email address is required",
          code: "custom",
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.supportPayPalHandle)) {
        ctx.addIssue({
          path: ["supportPayPalHandle"],
          message: "Please enter a valid PayPal email address",
          code: "custom",
        });
      }
    }
  });

const HaveANeedPage = () => {
  const [isHaveNeedDialogOpen, setIsHaveNeedDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      typeOfSupport: "Financial",
      descriptionAboutYourNeed: "",
      howCanWeSupportYou: "",
      amountOfSupport: "",
      supportMethod: "",
      supportCashAppHandle: "",
      supportPayPalHandle: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setIsHaveNeedDialogOpen(true);
  }
  return (
    <Container as="section" className="pt-8">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "I Have A Need", url: "#" },
        ]}
      />
      <section className="pt-10 space-y-10 pb-20">
        <div className="text-center">
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
                      <FormLabel className="text-lg leading-[100%] font-medium inline">
                        How much support are you requesting?{" "}
                        <span className="">*</span>{" "}
                        <span className="text-[13px] text-[#7E7971] font-normal">
                          (If your request is selected for financial assistance,
                          support will be provided directly by One Heart Society
                          as resources allow)
                        </span>
                      </FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="Enter amount (max $100)"
                            className="bg-[#FBF7F0] px-6 py-4 pl-12 h-[60px] rounded-[10px] !text-base"
                            {...field}
                          />
                        </FormControl>
                        <BiDollar className="absolute size-6 left-4 top-1/2 transform -translate-y-1/2" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="supportMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-lg leading-[100%] font-medium inline">
                        If we’re able to respond to your need, what’s the best
                        way to send support? <span className="">*</span>{" "}
                        <span className="text-[13px] text-[#7E7971] font-normal">
                          (Payment details are collected only so we can send
                          support if we’re able to respond. They are never
                          shared publicly or with other members)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-5 bg-[#FBF7F0] p-8 rounded-lg"
                        >
                          {/* Cash App Option */}
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="Cash App" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              Cash App
                            </FormLabel>
                          </FormItem>
                          {field.value === "Cash App" && (
                            <FormField
                              control={form.control}
                              name="supportCashAppHandle"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[15px] font-medium">
                                    Enter Your Cash App Handle{" "}
                                    <span className="">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter $YourHandle"
                                      className="bg-[#F3EDE5] border-[#F3EDE5] px-6 py-4 h-[60px] rounded-[10px] !text-base"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />{" "}
                                  {/* ✅ Shows error under input */}
                                </FormItem>
                              )}
                            />
                          )}

                          {/* PayPal Option */}
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="PayPal" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              PayPal
                            </FormLabel>
                          </FormItem>
                          {field.value === "PayPal" && (
                            <FormField
                              control={form.control}
                              name="supportPayPalHandle"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[15px] font-medium">
                                    Enter Your PayPal Email Address{" "}
                                    <span className="">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter email"
                                      className="bg-[#F3EDE5] border-[#F3EDE5] px-6 py-4 h-[60px] rounded-[10px] !text-base"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />{" "}
                                  {/* ✅ Shows error under input */}
                                </FormItem>
                              )}
                            />
                          )}
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
      <HaveNeedDialog
        open={isHaveNeedDialogOpen}
        onOpenChange={setIsHaveNeedDialogOpen}
      />
    </Container>
  );
};

export default HaveANeedPage;
