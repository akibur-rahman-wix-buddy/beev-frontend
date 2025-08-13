import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import TheImpactOfYourSupportImg from "@/assets/images/sectionImages/impactOfYourSupport.png";

import { cn } from "@/lib/utils";

const TheImpactOfYourSupportSec = ({ className }) => {
  return (
    <Container
      className={cn("flex items-center gap-40 relative z-10", className)}
    >
      <div className="flex-[55%] text-[17px]">
        <SectionTitle className="mb-6">The Impact of Your Support</SectionTitle>
        <div className=" text-lg space-y-4">
          <p className="">
            When you give to One Heart Society, you become part of a quiet yet
            powerful circle of care. Your generosity helps us create spaces
            where needs are met with dignity, where comfort replaces hardship,
            and where hope has room to grow.
          </p>
          <p className="">
            In a world that can feel overwhelming and unkind, your support fuels
            acts of compassion that remind people they are not forgotten. Your
            support helps keep doors open to resources, connection, and
            thoughtful care - especially for those who have nowhere else to turn
            or who have already exhausted every other option.
          </p>
          <p>
            Every contribution, no matter the size, becomes a ripple of comfort,
            hope, and dignity that truly matters.
          </p>
        </div>
      </div>
      <figure className="flex-[45%] rounded-xl overflow-hidden">
        <img
          src={TheImpactOfYourSupportImg}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </figure>
    </Container>
  );
};

export default TheImpactOfYourSupportSec;
