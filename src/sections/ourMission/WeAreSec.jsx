import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import weAreImg from "@/assets/images/sectionImages/we-are.png";

import { cn } from "@/lib/utils";

const WeAreSec = ({ className }) => {
  return (
    <section
      className={cn(
        "py-8 md:py-10 lg:py-12 xl:py-16 relative bg-[#F3EDE5]",
        className
      )}
    >
      <Container className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-32 relative z-10">
        <figure className="md:flex-[50%] xl:flex-[40%] rounded-xl overflow-hidden max-w-[400px] md:max-w-full">
          <img
            src={weAreImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="md:flex-[50%] xl:flex-[60%] text-[15px] sm:text-base xl:text-lg">
          <SectionTitle className="!mb-3 lg:!mb-6">We Are</SectionTitle>
          <ul className="list-disc pl-4.5 space-y-2 sm:space-y-3 lg:space-y-4">
            <li>Anonymous when needed</li>
            <li>Heart-led and human-held</li>
            <li>Trauma-aware, discreet, and built on trust</li>
            <li>
              Here for the ones who don’t know how to ask but express a deep
              need
            </li>
            <li>A place to be met, seen and held</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default WeAreSec;
