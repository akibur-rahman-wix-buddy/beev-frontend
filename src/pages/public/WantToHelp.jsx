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
import { Textarea } from "@/components/ui/textarea";
import { BiDollar } from "react-icons/bi";
import HaveNeedDialog from "@/components/dialog/HaveNeedDialog";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required").min(2, {
      message: "Name must be at least 2 characters.",
    }),
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

const WantToHelp = () => {
  const [isHaveNeedDialogOpen, setIsHaveNeedDialogOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("One Time");
  const [selectedAmount, setSelectedAmount] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      typeOfPayment: "One Time",
    },
  });

  useEffect(() => {
    form.setValue("amountOfSupport", selectedAmount);
  }, [selectedAmount, form]);

  function onSubmit(values) {
    console.log(values);
    setIsHaveNeedDialogOpen(true);
  }
  return (
    <Container as="section" className="pt-8">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "I Want to Help", url: "#" },
        ]}
      />
      <section className="pt-10 space-y-10 pb-20">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-5">I Want to Help</h2>
          <div className="max-w-[680px] mx-auto text-lg">
            <p>
              However you choose to give, it matters deeply. Your kindness
              becomes part of a gentle circle that carries what someone else
              can't carry alone.
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
                  name="typeOfPayment"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-lg font-medium">
                        How often would you like to give? *
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value);
                            setPaymentType(value);
                          }}
                          defaultValue={field.value}
                          className={cn(
                            "flex flex-col gap-5 bg-[#FBF7F0] p-8 rounded-lg"
                          )}
                        >
                          <FormItem
                            className={cn("flex gap-3 items-center")}
                            // className={cn(
                            //   "flex gap-3",
                            //   field.value == "One Time"
                            //     ? "items-start"
                            //     : "items-center"
                            // )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                value="One Time"
                                className={cn("")}
                                // className={cn(
                                //   field.value == "One Time" && "mt-1"
                                // )}
                              />
                            </FormControl>
                            <div className="">
                              <FormLabel className="font-normal text-lg cursor-pointer">
                                One Time Only
                              </FormLabel>
                              {/* {field.value == "One Time" && (
                                <div className="flex items-center gap-1">
                                  <InfoIcon />
                                  <p className="text-sm text-[#8F8D8D]">
                                    15% of your one-time gift supports the
                                    platform and secure delivery of your gift
                                  </p>
                                </div>
                              )} */}
                            </div>
                          </FormItem>
                          <FormItem
                            className={cn("flex gap-3 items-center")}
                            // className={cn(
                            //   "flex gap-3",
                            //   field.value == "One Time"
                            //     ? "items-start"
                            //     : "items-center"
                            // )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                value="Monthly"
                                className={cn("")}
                                // className={cn(
                                //   field.value == "One Time" && "mt-1"
                                // )}
                              />
                            </FormControl>
                            <div className="">
                              <FormLabel className="font-normal text-lg cursor-pointer">
                                Regularly (monthly or ongoing)
                              </FormLabel>
                              {/* {field.value == "Monthly" && (
                                <div className="flex items-center gap-1">
                                  <InfoIcon />
                                  <p className="text-sm text-[#8F8D8D]">
                                    30% of your gift helps fulfill unseen needs
                                    and keeps this space alive for all
                                  </p>
                                </div>
                              )} */}
                            </div>
                          </FormItem>
                          <hr className="border-t border-[#EEE9E2]" />
                          <Link
                            to="/impact-of-your-support"
                            className="text-primary flex items-center gap-1 hover:[&>svg]:-rotate-45 [&>svg]:transition-all [&>svg]:duration-300"
                          >
                            Learn more about the impact of your support{" "}
                            <ArrowRight className="size-5" />
                          </Link>
                        </RadioGroup>
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
                        Is there a featured need that you felt called to answer?
                        <span className="text-[#7E7971] text-sm font-normal">
                          (Optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-5 bg-[#FBF7F0] p-8 rounded-lg"
                        >
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              Yes
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel className="font-normal text-lg cursor-pointer">
                              No
                            </FormLabel>
                          </FormItem>

                          {field.value === "Yes" && (
                            <FormField
                              control={form.control}
                              name="supportPayPalHandle"
                              render={({ field }) => (
                                <FormItem className="space-y-1">
                                  <FormLabel className="font-medium text-[15px]">
                                    Who or what do you remember? (Support is not
                                    guaranteed for specific requests)
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Featured Needs Number or Name..."
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
                <FormField
                  control={form.control}
                  name="howCanWeSupportYou"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        What inspires you to give?{" "}
                        <span className="text-[#7E7971] text-sm font-normal">
                          (Optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your heart, story, or inspiration..."
                          className="bg-[#FBF7F0] px-6 py-4 rounded-[10px] h-[250px] !text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Choose Your{" "}
                    {paymentType === "Monthly" ? "Monthly" : "One-Time"}{" "}
                    Contribution
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { amount: "15", label: "A Kind Gesture" },
                      { amount: "30", label: "A Hand Reached Out" },
                      { amount: "50", label: "A Heart Open Wide" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-lg bg-[#FBF7F0] text-primary w-full flex flex-col justify-between gap-8"
                      >
                        <div className="space-y-2">
                          <h4 className="text-3xl font-semibold">
                            ${item.amount}
                            <span
                              className={cn(
                                "transition-all duration-300",
                                paymentType === "Monthly"
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            >
                              /Month
                            </span>
                          </h4>
                          <p className="text-xl">{item.label}</p>
                        </div>
                        <Button
                          type="button"
                          className={"w-full py-2.5"}
                          onClick={() => setSelectedAmount(item.amount)}
                        >
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="amountOfSupport"
                  render={({ field }) => (
                    <FormItem className="bg-[#FBF7F0] p-8 rounded-lg">
                      <FormLabel className="text-lg font-medium">
                        Custom Amount{" "}
                        <span className="text-[#7E7971] text-sm font-normal">
                          (Any amount big or small makes a difference)
                        </span>
                      </FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            {...field}
                            value={field.value === 0 ? "" : field.value}
                            className="bg-[#FBF7F0] px-6 py-4 pl-12 h-[60px] rounded-[10px] !text-base"
                          />
                        </FormControl>
                        <BiDollar className="absolute size-6 left-4 top-1/2 transform -translate-y-1/2" />
                      </div>
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

export default WantToHelp;
