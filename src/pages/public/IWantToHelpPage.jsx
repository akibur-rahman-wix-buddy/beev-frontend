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
import { LuHash } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import IWantToHelpDialog from "@/components/dialog/IWantToHelpDialog";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required").min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(1, "Email is required")
      .pipe(z.email("Please enter a valid email address")),
    typeOfPayment: z.string().min(1, "Please select a type of payment"),
    specificHelp: z.string().min(1, "Please select an option"),
    specificHelpHeartId: z.string().optional(),
    inspireDetails: z.string().optional(),
    amountOfSupport: z
      .string()
      .min(1, "Amount is required")
      .refine((val) => {
        const num = parseFloat(val);
        return !isNaN(num) && num > 0;
      }, "Please enter a valid amount greater than zero"),
  })
  .superRefine((data, ctx) => {
    // If specificHelp is "Yes", then specificHelpHeartId is required
    if (data.specificHelp === "Yes" && !data.specificHelpHeartId?.trim()) {
      ctx.addIssue({
        path: ["specificHelpHeartId"],
        message: "Heart ID is required when you want to give a specific one",
        code: "custom",
      });
    }
  });

const IWantToHelpPage = () => {
  const [isIWantToHelpDialogOpen, setIsIWantToHelpDialogOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("One Time");
  const [selectedAmount, setSelectedAmount] = useState();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      typeOfPayment: "One Time",
      specificHelp: "No",
      specificHelpHeartId: "",
      inspireDetails: "",
      amountOfSupport: "",
    },
  });

  useEffect(() => {
    form.setValue("amountOfSupport", selectedAmount);
  }, [selectedAmount, form]);

  function onSubmit(values) {
    console.log(values);
    setIsIWantToHelpDialogOpen(true);
  }
  return (
    <Container as="section" className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "I Want to Help", url: "#" },
        ]}
      />
      <section className="pt-5 sm:pt-6 md:pt-7 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2.5 sm:mb-3.5 lg:mb-5">
            I Want to Help
          </h2>
          <div className="max-w-[680px] mx-auto text-[15px] sm:text-base lg:text-lg">
            <p>
              However you choose to give, it matters deeply. Your kindness
              becomes part of a gentle circle that carries what someone else
              can't carry alone.
            </p>
          </div>
        </div>
        <div className="sm:bg-[#F3EDE5] py-0 sm:py-10 md:pb-12 lg:pb-16 xl:pb-20 rounded-lg">
          <div className="max-w-[1000px] mx-auto sm:px-8 lg:px-12">
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
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline">
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
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline">
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
                  name="typeOfPayment"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline mb-0">
                        How often would you like to give? *
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value);
                            setPaymentType(value);
                          }}
                          defaultValue={field.value}
                          className="flex flex-col gap-4 sm:gap-5 bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input"
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
                              <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
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
                              <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
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
                            className="text-primary text-sm sm:text-base lg:text-lg flex items-center gap-1 hover:[&>svg]:-rotate-45 [&>svg]:transition-all [&>svg]:duration-300"
                          >
                            Learn more about the impact of your support{" "}
                            <ArrowRight className="size-4 sm:size-5 lg:size-6" />
                          </Link>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specificHelp"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline mb-0">
                        Is there a featured need that you felt called to answer?
                        <span className="text-[#7E7971] text-sm font-normal">
                          (Optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-4 sm:gap-5 bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input"
                        >
                          <FormItem className="flex md:items-center lg:gap-3">
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                              Yes
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex md:items-center lg:gap-3">
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                              No
                            </FormLabel>
                          </FormItem>

                          {field.value === "Yes" && (
                            <FormField
                              control={form.control}
                              name="specificHelpHeartId"
                              render={({ field }) => (
                                <FormItem className="space-y-1">
                                  <FormLabel className="text-sm sm:text-[15px] font-medium inline">
                                    What do you remember?{" "}
                                    <span className="text-[#7E7971] text-sm font-normal">
                                      (Support is not guaranteed for specific
                                      requests)
                                    </span>
                                  </FormLabel>
                                  <div className="relative">
                                    <FormControl>
                                      <Input
                                        placeholder="Enter Featured Needs Heart ID, for example #105"
                                        className="bg-[#F3EDE5] border-[#F3EDE5] px-4 sm:px-6 pl-8 sm:pl-12 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
                                        {...field}
                                      />
                                    </FormControl>
                                    <LuHash className="absolute size-4.5 sm:size-6 left-[9px] sm:left-4 top-1/2 transform -translate-y-1/2" />
                                  </div>
                                  {/* <FormControl>
                                    <Input
                                      placeholder="Enter Featured Needs Heart ID, for example #102"
                                      className="bg-[#F3EDE5] border-[#F3EDE5] px-6 py-4 h-[60px] rounded-[10px] !text-base"
                                      {...field}
                                    />
                                  </FormControl> */}
                                  <FormMessage />
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
                  name="inspireDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                        What inspires you to give?{" "}
                        <span className="text-[#7E7971] text-sm font-normal">
                          (Optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your heart, story, or inspiration..."
                          className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <h3 className="text-[17px] sm:text-lg font-medium">
                    Choose Your{" "}
                    {paymentType === "Monthly" ? "Monthly" : "One-Time"}{" "}
                    Contribution
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { amount: "15", label: "A Kind Gesture" },
                      { amount: "30", label: "A Hand Reached Out" },
                      { amount: "50", label: "A Heart Open Wide" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4.5 xl:p-5 rounded-lg md:rounded-[10px] bg-[#FBF7F0] border border-input text-primary w-full flex flex-row sm:flex-col items-center sm:items-start justify-between gap-3 sm:gap-6 lg:gap-8"
                      >
                        <div className="space-y-1 sm:space-y-2">
                          <h4 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold">
                            ${item.amount}
                            <span
                              className={cn(
                                "text-base sm:text-lg md:text-base lg:text-xl transition-all duration-300",
                                paymentType === "Monthly"
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            >
                              /Month
                            </span>
                          </h4>
                          <p className="text-base sm:text-lg md:text-base lg:text-xl">
                            {item.label}
                          </p>
                        </div>
                        <Button
                          type="button"
                          className="sm:w-full"
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
                    <FormItem className="bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input">
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline">
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
                            className="bg-[#F3EDE5] sm:bg-[#FBF7F0]  border-[#F3EDE5] px-4 sm:px-6 pl-8 sm:pl-12 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
                            {...field}
                          />
                        </FormControl>
                        <BiDollar className="absolute size-5 sm:size-6 left-2 sm:left-4 top-1/2 transform -translate-y-1/2" />
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
      <IWantToHelpDialog
        open={isIWantToHelpDialogOpen}
        onOpenChange={setIsIWantToHelpDialogOpen}
      />
    </Container>
  );
};

export default IWantToHelpPage;
