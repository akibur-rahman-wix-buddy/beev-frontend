import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";

const DonationsSection = () => {
  const receipts = [
    {
      amount: "$75.00",
      postedDate: "May 15, 2023",
    },
    {
      amount: "$50.00",
      postedDate: "May 15, 2023",
    },
    {
      amount: "$25.00",
      postedDate: "May 15, 2023",
    },
    {
      amount: "$100.00",
      postedDate: "May 15, 2023",
    },
    {
      amount: "$75.00",
      postedDate: "May 15, 2023",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 border border-[#E4DDD2] rounded-lg space-y-4 sm:space-y-5 lg:space-y-6">
      <div className="bg-[#F3EDE5] p-4 sm:p-5 lg:p-6 rounded-[10px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-7 lg:mb-8">
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-medium">Support Amount</h3>
          <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold">$200.00</p>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2">
          <p className="text-sm sm:text-base lg:text-[16px]">Active Plan</p>
          <div
            className={cn(
              "px-3 sm:px-4 lg:px-4 py-1.5 sm:py-2 w-fit rounded-full text-sm sm:text-base font-medium bg-[#F7A9A0] text-white"
            )}
          >
            Monthly Giving
          </div>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4 lg:space-y-5">
        <p className="text-sm sm:text-base lg:text-lg font-medium">All Receipts</p>
        {receipts.map((receipt, index) => (
          <div
            key={index}
            className="bg-[#F3EDE5] p-4 sm:p-5 lg:p-6 rounded-[10px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4"
          >
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-medium">{receipt.amount}</h3>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#827D77]">Posted on: {receipt.postedDate}</p>
            </div>
            <p className="text-sm sm:text-base font-medium cursor-pointer hover:underline self-start sm:self-auto">View Receipt</p>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-10 space-y-4 sm:space-y-6 lg:space-y-8">
        <Button className="w-full text-sm sm:text-base text-textPrimary bg-[#F3EDE5] hover:text-white transition-all duration-300 ease-in-out py-2.5 sm:py-3 lg:py-3.5">
          Download Receipts
        </Button>
        <Button className="w-full text-sm sm:text-base text-destructive bg-[#F5E9E9] hover:bg-destructive/75 hover:text-white transition-all duration-300 ease-in-out py-2.5 sm:py-3 lg:py-3.5">
          Cancel Monthly Giving
        </Button>
      </div>
    </div>
  );
};

export default DonationsSection;
