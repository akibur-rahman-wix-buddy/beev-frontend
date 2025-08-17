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
  }

  return (
    <section className={cn("bg-[#F3EDE5]", className)}>
      <Container className="py-20">
        <SectionTitle description="Choose Your Contribution" center>
          Join the Circle of Care
        </SectionTitle>
        <div className="grid grid-cols-4 gap-6">
          {[
            { amount: "10", label: "Seed Supporter" },
            { amount: "25", label: "Heart Holder" },
            { amount: "50", label: "Circle Sustainer" },
            { amount: "100", label: "Founding Heart" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#FBF7F0] text-primary w-full aspect-[2/1] flex flex-col justify-between gap-6"
            >
              <div className="space-y-2">
                <h4 className="text-3xl font-semibold">
                  ${item.amount}
                  <span
                    className={cn(
                      "transition-all duration-300",
                      paymentType === "Monthly" ? "opacity-100" : "opacity-0"
                    )}
                  >
                    /Month
                  </span>
                </h4>
                <p className="text-xl">{item.label}</p>
              </div>
              <Button
                className={"w-full py-2.5"}
                onClick={() => setSelectedAmount(item.amount)}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
        <div className="my-9">
          <p className="text-xl mb-5 font-medium text-center">
            Support That Feels Right for You
          </p>
          <Tabs defaultValue="Monthly" onValueChange={setPaymentType}>
            <TabsList className="bg-[#E5DDD1] rounded-full h-auto mx-auto">
              <TabsTrigger
                value="Monthly"
                className={cn("rounded-full cursor-pointer text-xl px-7 py-3", {
                  "!bg-primary !text-white": paymentType === "Monthly",
                })}
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="One Time"
                className={cn("rounded-full cursor-pointer text-xl px-7 py-3", {
                  "!bg-primary !text-white": paymentType === "One Time",
                })}
              >
                One Time
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <FormField
              control={form.control}
              name="amountOfSupport"
              render={({ field }) => (
                <FormItem className="bg-[#FBF7F0] p-8 rounded-lg">
                  <FormLabel className="text-lg font-medium">
                    Custom Amount{" "}
                    <span className="text-[#9D9A96] text-base font-normal">
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
              Continue to Payment
            </Button>
          </form>
        </Form>
      </Container>
    </section>
  );
};

export default JoinTheCirclePaymentSec;
