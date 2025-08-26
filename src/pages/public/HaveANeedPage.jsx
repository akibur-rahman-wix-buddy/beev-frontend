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
import HaveNeedDialogFinancial from "@/components/dialog/HaveNeedDialogFinancial";
import { useState } from "react";
import { Checkbox } from "@/components/custom/checkbox";
import HaveNeedDialogEmotional from "@/components/dialog/HaveNeedDialogEmotional";
import HaveNeedDialogThoughtful from "@/components/dialog/HaveNeedDialogThoughtful";

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
    // Financial support specific fields
    amountOfSupport: z.string().optional(),
    supportMethod: z.string().optional(),
    supportCashAppHandle: z.string().optional(),
    supportPayPalHandle: z.string().optional(),
    typesofCareYouNeeded: z.array(z.string()).optional(),
    interestedToJoin: z.string().optional(),
    postOnHeartWall: z.string().optional(),
    whenWantToPost: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Financial support validation
    if (data.typeOfSupport === "Financial") {
      // Amount validation
      if (!data.amountOfSupport) {
        ctx.addIssue({
          path: ["amountOfSupport"],
          message: "Amount is required",
          code: "custom",
        });
      } else {
        const num = parseFloat(data.amountOfSupport);
        if (isNaN(num) || num <= 0 || num > 100) {
          ctx.addIssue({
            path: ["amountOfSupport"],
            message: "Please enter a valid amount between $1 and $100",
            code: "custom",
          });
        }
      }

      // Support method validation
      if (!data.supportMethod) {
        ctx.addIssue({
          path: ["supportMethod"],
          message: "Please select a method to send support",
          code: "custom",
        });
      }

      // Cash App validation
      if (data.supportMethod === "Cash App" && !data.supportCashAppHandle) {
        ctx.addIssue({
          path: ["supportCashAppHandle"],
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
        } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.supportPayPalHandle)
        ) {
          ctx.addIssue({
            path: ["supportPayPalHandle"],
            message: "Please enter a valid PayPal email address",
            code: "custom",
          });
        }
      }
    }

    // Emotional support validation
    if (data.typeOfSupport === "Emotional") {
      // Types of care validation
      if (!data.typesofCareYouNeeded || data.typesofCareYouNeeded.length < 1) {
        ctx.addIssue({
          path: ["typesofCareYouNeeded"],
          message: "Please select at least one type of care you need",
          code: "custom",
        });
      }
    }

    // Heart Wall validation
    if (data.postOnHeartWall === "Yes" && !data.whenWantToPost) {
      ctx.addIssue({
        path: ["whenWantToPost"],
        message: "Please select when you’d like this post shared",
        code: "custom",
      });
    }
  });

const HaveANeedPage = () => {
  const [isHaveNeedDialogFinancialOpen, setIsHaveNeedDialogFinancialOpen] =
    useState(false);
  const [isHaveNeedDialogEmotionalOpen, setIsHaveNeedDialogEmotionalOpen] =
    useState(false);
  const [isHaveNeedDialogThoughtfulOpen, setIsHaveNeedDialogThoughtfulOpen] =
    useState(false);

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
      typesofCareYouNeeded: [],
      interestedToJoin: "",
      postOnHeartWall: "",
      whenWantToPost: "",
    },
  });

  const typeOfSupport = form.watch("typeOfSupport");

  function onSubmit(values) {
    console.log(values);
    if (typeOfSupport === "Financial") {
      setIsHaveNeedDialogFinancialOpen(true);
    } else if (typeOfSupport === "Thoughtful") {
      setIsHaveNeedDialogThoughtfulOpen(true);
    } else {
      setIsHaveNeedDialogEmotionalOpen(true);
    }
  }
  return (
    <Container as="section" className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "I Have A Need", url: "#" },
        ]}
      />
      <section className="pt-5 sm:pt-6 md:pt-7 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2.5 sm:mb-3.5 lg:mb-5">
            What’s Weighing on Your Heart Right Now?
          </h2>
          <div className="max-w-[680px] mx-auto text-[15px] sm:text-base lg:text-lg">
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
                  name="typeOfSupport"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[17px] sm:text-lg font-medium inline mb-0">
                        Select the type of support that best fits your current
                        need <span className="">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-4 sm:gap-5 bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input"
                        >
                          <FormItem className="flex md:items-center lg:gap-3">
                            <FormControl>
                              <RadioGroupItem value="Financial" />
                            </FormControl>
                            <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                              <p>
                                Financial -{" "}
                                <span className="text-[#898682]">
                                  Support with small but urgent needs like
                                  meals, personal items, or transit fare, etc
                                </span>
                              </p>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex md:items-center lg:gap-3">
                            <FormControl>
                              <RadioGroupItem value="Emotional" />
                            </FormControl>
                            <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                              <p>
                                Emotional -{" "}
                                <span className="text-[#898682]">
                                  Support with grief, stress, or emotional
                                  heaviness
                                </span>
                              </p>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex md:items-center lg:gap-3">
                            <FormControl>
                              <RadioGroupItem value="Thoughtful" />
                            </FormControl>
                            <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
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
                {typeOfSupport === "Financial" && (
                  <>
                    <FormField
                      control={form.control}
                      name="descriptionAboutYourNeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            Tell us more about your need{" "}
                            <span className="">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please share as openly and honestly as you feel comfortable. The more we understand, the better we can respond with care..."
                              className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
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
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            How would you feel most supported right now?{" "}
                            <span className="text-[#7E7971] text-sm font-normal">
                              (Optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share how we could best show up for you right now..."
                              className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
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
                          <FormLabel className="text-[17px] sm:text-lg leading-[120%] font-medium inline">
                            How much support are you requesting?{" "}
                            <span className="">*</span>{" "}
                            <span className="text-sm text-[#7E7971] font-normal">
                              (If your request is selected for financial
                              assistance, support will be provided directly by
                              One Heart Society)
                            </span>
                          </FormLabel>
                          <div className="relative">
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Enter amount (max $100)"
                                className="bg-[#FBF7F0] px-4 sm:px-6 pl-8 sm:pl-12 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
                                {...field}
                              />
                            </FormControl>
                            <BiDollar className="absolute size-5 sm:size-6 left-2 sm:left-4 top-1/2 transform -translate-y-1/2" />
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
                          <FormLabel className="text-[17px] sm:text-lg leading-[120%] font-medium inline">
                            If we’re able to respond to your need, what’s the
                            best way to send support?{" "}
                            <span className="">*</span>{" "}
                            <span className="text-sm text-[#7E7971] font-normal">
                              (Payment details are collected only so we can send
                              support if we’re able to respond. They are never
                              shared publicly or with other members)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col gap-4 sm:gap-5 bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input"
                            >
                              {/* Cash App Option */}
                              <FormItem className="flex md:items-center lg:gap-3">
                                <FormControl>
                                  <RadioGroupItem value="Cash App" />
                                </FormControl>
                                <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                                  Cash App
                                </FormLabel>
                              </FormItem>
                              {field.value === "Cash App" && (
                                <FormField
                                  control={form.control}
                                  name="supportCashAppHandle"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-sm sm:text-[15px] font-medium inline">
                                        Enter Your Cash App Handle{" "}
                                        <span className="">*</span>
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Enter $YourHandle"
                                          className="bg-[#F3EDE5] border-[#F3EDE5] px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
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
                              <FormItem className="flex md:items-center lg:gap-3">
                                <FormControl>
                                  <RadioGroupItem value="PayPal" />
                                </FormControl>
                                <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                                  PayPal
                                </FormLabel>
                              </FormItem>
                              {field.value === "PayPal" && (
                                <FormField
                                  control={form.control}
                                  name="supportPayPalHandle"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-sm sm:text-[15px] font-medium inline">
                                        Enter Your PayPal Email Address{" "}
                                        <span className="">*</span>
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Enter email"
                                          className="bg-[#F3EDE5] border-[#F3EDE5] px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
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
                  </>
                )}
                {typeOfSupport === "Emotional" && (
                  <>
                    <FormField
                      control={form.control}
                      name="descriptionAboutYourNeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            Tell us more about your need{" "}
                            <span className="">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please share as openly and honestly as you feel comfortable. The more we understand, the better we can respond with care..."
                              className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
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
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            How would you feel most supported right now?{" "}
                            <span className="text-[#7E7971] text-sm font-normal">
                              (Optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Optional, but helpful for offering the kind of support your heart needs..."
                              className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="typesofCareYouNeeded"
                      render={() => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            What kind of care are you open to receiving?
                          </FormLabel>
                          <div className="flex flex-col gap-4 sm:gap-5 bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input">
                            {[
                              "Kind messages or words of encouragement",
                              "Spiritual or guided journal prompts",
                              "A resource or suggestion",
                              "A listening presence",
                            ].map((option) => (
                              <FormField
                                key={option}
                                control={form.control}
                                name="typesofCareYouNeeded"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={option}
                                      className="flex md:items-center lg:gap-3"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            option
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...(field.value || []),
                                                  option,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== option
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                                        {option}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="interestedToJoin"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            Are you interested in joining One Heart Sanctuary?
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
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                {typeOfSupport === "Thoughtful" && (
                  <>
                    <FormField
                      control={form.control}
                      name="descriptionAboutYourNeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            Tell us more about your need{" "}
                            <span className="">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder=" Please share as openly as you'd like. What would feel meaningful to receive from the community..."
                              className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
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
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            How would you feel most supported right now?{" "}
                            <span className="text-[#7E7971] text-sm font-normal">
                              (Optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder=" i.e “I’d love to receive kind words on my birthday,” or “I’m just hoping to feel seen.”"
                              className="bg-[#FBF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg md:rounded-[10px] !text-sm sm:!text-base h-[200px] sm:h-[240px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postOnHeartWall"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                            Could we post this request (anonymously) on The
                            Heart Wall on your behalf?
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
                                  Yes, please
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex md:items-center lg:gap-3">
                                <FormControl>
                                  <RadioGroupItem value="No" />
                                </FormControl>
                                <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                                  No, I’d prefer to keep this private
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {form.watch("postOnHeartWall") === "Yes" && (
                      <FormField
                        control={form.control}
                        name="whenWantToPost"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                              When would you like this post shared?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col gap-4 sm:gap-5 bg-[#FBF7F0] p-4.5 sm:p-7 lg:p-8 rounded-lg md:rounded-[10px] border border-input"
                              >
                                <FormItem className="flex md:items-center lg:gap-3">
                                  <FormControl>
                                    <RadioGroupItem value="Now" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                                    Now
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex md:items-center lg:gap-3">
                                  <FormControl>
                                    <RadioGroupItem value="Any Time" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-[15px] sm:text-base xl:text-lg cursor-pointer">
                                    Whenever the team feels it's right
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </>
                )}

                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      <HaveNeedDialogFinancial
        open={isHaveNeedDialogFinancialOpen}
        onOpenChange={setIsHaveNeedDialogFinancialOpen}
      />
      <HaveNeedDialogEmotional
        open={isHaveNeedDialogEmotionalOpen}
        onOpenChange={setIsHaveNeedDialogEmotionalOpen}
        interestedToJoin={form.watch("interestedToJoin") !== "No"}
      />
      <HaveNeedDialogThoughtful
        open={isHaveNeedDialogThoughtfulOpen}
        onOpenChange={setIsHaveNeedDialogThoughtfulOpen}
      />
    </Container>
  );
};

export default HaveANeedPage;
