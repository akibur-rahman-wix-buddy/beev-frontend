import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import whatMakesDifferentImg from "@/assets/images/sectionImages/what-makes-different.png";

import { cn } from "@/lib/utils";

const WhatMakesDifferentSec = ({ className }) => {
  return (
    <section className={cn("xl:py-16 relative", className)}>
      <Container className="flex flex-col-reverse lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-60 relative z-10">
        <div className="lg:flex-[50%] xl:flex-[55%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 sm:text-center sm:mx-auto lg:text-left lg:mx-0">
            What Makes This Different
          </SectionTitle>
          <div className="space-y-3 xl:space-y-4">
            <p className="font-semibold">We are not a crowdfunding site.</p>
            <ul className="list-disc sm:list-inside lg:list-outside pl-4.5 sm:pl-0 lg:pl-4.5 space-y-2 sm:space-y-2.5 lg:space-y-3">
              <li>There are no campaigns to run.</li>
              <li>No sad stories to perform.</li>
              <li>No need to prove your worth.</li>
              <li>Just an honest space to share your truth.</li>
            </ul>
            <p>
              Every request is reviewed and held with care, and we do our best
              to respond based on what’s shared. We are not here to exploit your
              pain. Your story matters, and it will be always received with
              compassion and met with support as resources become available.
            </p>
          </div>
        </div>
        <figure className="lg:flex-[50%] xl:flex-[45%] max-w-[400px] md:max-w-full rounded-xl overflow-hidden lg:py-10 xl:py-0">
          <img
            src={whatMakesDifferentImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </Container>
      <div className="absolute inset-0 hidden lg:flex">
        <div className="left flex-[calc(50%+250px)] xl:flex-[calc(50%+420px)]"></div>
        <div className="right flex-[calc(50%-250px)] xl:flex-[calc(50%-420px)] bg-[#F3EDE5] rounded-l-2xl"></div>
      </div>
    </section>
  );
};

export default WhatMakesDifferentSec;
