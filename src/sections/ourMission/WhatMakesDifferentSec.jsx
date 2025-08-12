import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import whatMakesDifferentImg from "@/assets/images/sectionImages/what-makes-different.png";

import { cn } from "@/lib/utils";

const WhatMakesDifferentSec = ({ className }) => {
  return (
    <section className={cn("py-16 relative", className)}>
      <Container className="flex items-center gap-60 relative z-10">
        <div className="flex-[55%] text-[17px]">
          <SectionTitle className="mb-6">
            What Makes This Different
          </SectionTitle>
          <div className="text-lg space-y-5">
            <p className="font-semibold">We are not a crowdfunding site.</p>
            <div className="">
              <li>There are no campaigns to run.</li>
              <li>No sad stories to perform.</li>
              <li>No need to convince others of your worth.</li>
              <li>
                But we do ask that you share your truth - honestly and clearly.
              </li>
            </div>
            <p>
              Every request is reviewed and held with care, and we do our best
              to respond based on what’s shared. We are not here to exploit your
              pain. Your story matters, and it will be always received with
              compassion and met with support as resources become available.
            </p>
          </div>
        </div>
        <figure className="flex-[45%] rounded-xl overflow-hidden">
          <img
            src={whatMakesDifferentImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </Container>
      <div className="absolute inset-0 flex">
        <div className="left flex-[calc(50%+350px)]"></div>
        <div className="right flex-[calc(50%-500px)] bg-[#F3EDE5] rounded-l-2xl"></div>
      </div>
    </section>
  );
};

export default WhatMakesDifferentSec;
