import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BiDollar } from "react-icons/bi";
import JoinCircleCompleteDialog from "@/components/dialog/JoinCircleCompleteDialog";

const formSchema = z.object({
  amountOfSupport: z
    .string()
    .min(1, "Amount is required")
    .transform((val) => parseFloat(val))
    .refine((num) => num > 0, {
      message: "Amount must be greater than zero",
    }),
});

const JoinTheCirclePaymentSec = ({ className }) => {
  const [paymentType, setPaymentType] = useState("Monthly");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [isJoinCircleCompleteDialogOpen, setIsJoinCircleCompleteDialogOpen] =
    useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amountOfSupport: 0,
    },
  });

  useEffect(() => {
    form.setValue("amountOfSupport", selectedAmount);
  }, [selectedAmount, form]);

  function onSubmit(values) {
    console.log(values);
    setIsJoinCircleCompleteDialogOpen(true);
  }

  return (
    <section className={cn("bg-[#F3EDE5]", className)}>
      <Container className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <SectionTitle description="Choose Your Contribution" center>
          Join The Circle of Care
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
          {[
            { amount: "25", label: "Heart Holder" },
            { amount: "50", label: "Circle Sustainer" },
            { amount: "100", label: "Founding Heart" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 lg:p-6 rounded-lg md:rounded-[10px] bg-[#FBF7F0] border border-input text-primary w-full sm:aspect-[2/1] flex flex-row sm:flex-col items-center sm:items-start justify-between gap-3 sm:gap-4 lg:gap-6"
            >
              <div className="space-y-1 sm:space-y-2">
                <h4 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold">
                  ${item.amount}
                  <span
                    className={cn(
                      "text-base sm:text-lg md:text-base lg:text-xl xl:text-[22px] transition-all duration-300",
                      paymentType === "Monthly" ? "opacity-100" : "opacity-0"
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
                className="sm:w-full py-2 sm:py-2.5"
                onClick={() => setSelectedAmount(item.amount)}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
        <div className="my-6 sm:my-8 lg:my-9">
          <p className="text-lg sm:text-xl mb-4 sm:mb-5 font-medium text-center">
            Support That Feels Right for You
          </p>
          <Tabs defaultValue="Monthly" onValueChange={setPaymentType}>
            <TabsList className="bg-[#E5DDD1] rounded-full h-auto mx-auto">
              <TabsTrigger
                value="Monthly"
                className={cn(
                  "rounded-full cursor-pointer text-lg sm:text-xl px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-3",
                  {
                    "!bg-primary !text-white": paymentType === "Monthly",
                  }
                )}
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="One Time"
                className={cn(
                  "rounded-full cursor-pointer text-lg sm:text-xl px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-3",
                  {
                    "!bg-primary !text-white": paymentType === "One Time",
                  }
                )}
              >
                One Time
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 sm:space-y-10"
          >
            <FormField
              control={form.control}
              name="amountOfSupport"
              render={({ field }) => (
                <FormItem className="bg-[#FBF7F0] p-4 sm:p-6 lg:p-8 rounded-lg md:rounded-[10px] border border-input">
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
                        {...field}
                        value={field.value === 0 ? "" : field.value}
                        className="bg-[#F3EDE5] sm:bg-[#FBF7F0] border-[#F3EDE5] sm:border-input px-4 sm:px-6 py-3 sm:py-4 pl-8 sm:pl-12 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base"
                      />
                    </FormControl>
                    <BiDollar className="absolute size-5 sm:size-6 left-2 sm:left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Continue to Payment
            </Button>
          </form>
        </Form>
      </Container>
      <JoinCircleCompleteDialog
        open={isJoinCircleCompleteDialogOpen}
        onOpenChange={setIsJoinCircleCompleteDialogOpen}
      />
    </section>
  );
};

export default JoinTheCirclePaymentSec;
