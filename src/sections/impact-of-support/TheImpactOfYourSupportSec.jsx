import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import TheImpactOfYourSupportImg from "@/assets/images/sectionImages/impactOfYourSupport.png";

import { cn } from "@/lib/utils";

const TheImpactOfYourSupportSec = ({ className }) => {
  return (
    <Container className={cn("", className)}>
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-40 relative z-10">
        <div className="w-full lg:flex-[55%] text-base sm:text-lg lg:text-[17px] order-2 lg:order-1">
          <SectionTitle className="mb-4 xl:mb-6 text-center lg:text-left mx-auto lg:mx-0">
            The Impact of Your Support
          </SectionTitle>
          <div className="text-sm sm:text-lg lg:text-base xl:text-lg space-y-3 sm:space-y-4 text-center lg:text-left">
            <p className="">
              When you give to One Heart Society, you become part of a quiet yet
              powerful circle of care. Your generosity helps us create spaces
              where needs are met with dignity, where comfort replaces hardship,
              and where hope has room to grow.
            </p>
            <p className="">
              In a world that can feel overwhelming and unkind, your support
              fuels acts of compassion that remind people they are not
              forgotten. Your support helps keep doors open to resources,
              connection, and thoughtful care - especially for those who have
              nowhere else to turn or who have already exhausted every other
              option.
            </p>
            <p>
              Every contribution, no matter the size, becomes a ripple of
              comfort, hope, and dignity that truly matters.
            </p>
          </div>
        </div>
        <figure className="w-full lg:flex-[45%] rounded-xl overflow-hidden order-1 lg:order-2 max-w-md lg:max-w-none">
          <img
            src={TheImpactOfYourSupportImg}
            alt="The Impact of Your Support"
            className="h-full w-full object-cover object-center aspect-[4/3] lg:aspect-auto"
          />
        </figure>
      </div>
    </Container>
  );
};

export default TheImpactOfYourSupportSec;
