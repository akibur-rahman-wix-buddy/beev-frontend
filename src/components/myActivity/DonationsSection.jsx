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
    <div className="p-12 border border-[#E4DDD2] rounded-lg space-y-6">
      <div className="bg-[#F3EDE5] p-6 rounded-[10px] flex justify-between items-center mb-8">
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Total Support Amount</h3>
          <p className="text-3xl font-semibold">$200.00</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-[16px]">Active Plan</p>
          <div
            className={cn(
              "px-4 py-2 w-fit rounded-full font-medium bg-[#F7A9A0] text-white"
            )}
          >
            Monthly Giving
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <p>All Receipts</p>
        {receipts.map((receipt, index) => (
          <div
            key={index}
            className="bg-[#F3EDE5] p-6 rounded-[10px] flex justify-between items-center"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-medium">{receipt.amount}</h3>
              <p className="text-[#827D77]">
                Posted on: {receipt.postedDate}
              </p>
            </div>
            <p className="font-medium cursor-pointer">View Receipt</p>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-8">
        <Button className="w-full text-destructive bg-[#F5E9E9] hover:bg-destructive/75 hover:text-white transition-all duration-300 ease-in-out">Cancel Monthly Giving</Button>
        <Button className="w-full text-textPrimary bg-[#F3EDE5] hover:text-white transition-all duration-300 ease-in-out">Download Receipts</Button>
      </div>
    </div>
  );
};

export default DonationsSection;
