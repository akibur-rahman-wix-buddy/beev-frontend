import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import {
  FeatherIcon,
  HandWithLoveIcon,
  HeartIcon3,
  MoonIcon,
} from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const SpaceSustainableSec = ({ className }) => {
  return (
    <Container as="section" className={cn("", className)}>
      <SectionTitle
        description="Transparency builds trust. Here’s how contributions are allocated to ensure impact and sustainability. One Heart Society keeps a small portion of each gift to maintain a secure, responsive platform for those who need it."
        className="max-w-[940px] mx-auto"
        center
      >
        How We Keep This Space Sustainable
      </SectionTitle>
      <div className="grid grid-cols-2 gap-8 mt-10 text-center">
        <div className="bg-[#F3EDE5] p-10 rounded-2xl">
          <div className="text-primary font-semibold flex flex-col items-center gap-2 mb-3">
            <h3 className="text-5xl">15%</h3>
            <p className="text-lg">One-Time Contributions</p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-3 max-w-[460px] mx-auto">
            <h4 className="text-[22px] font-medium">
              Platform Support + Heart-Centered Review
            </h4>
            <p className="text-[#898682] text-lg">
              Covers essential platform upkeep, secure payment processing, and
              the thoughtful care we take reviewing each request. This ensures
              every visible need is genuine, timely, and reaches someone truly
              in need.
            </p>
          </div>
        </div>
        <div className="bg-[#F3EDE5] p-10 rounded-2xl">
          <div className="text-primary font-semibold flex flex-col items-center gap-2 mb-3">
            <h3 className="text-5xl">30%</h3>
            <p className="text-lg">Monthly Contributions</p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-3 max-w-[460px] mx-auto">
            <h4 className="text-[22px] font-medium">
              Quiet Care & Overflow Fund
            </h4>
            <p className="text-[#898682] text-lg">
              Helps provide compassionate support for private or sensitive needs
              in a timely manner, while also ensuring the platform remains
              steady, cared for, and ready to help at any moment.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SpaceSustainableSec;
