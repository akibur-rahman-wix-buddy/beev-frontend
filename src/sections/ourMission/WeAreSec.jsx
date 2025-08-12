import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import weAreImg from "@/assets/images/sectionImages/we-are.png";

import { cn } from "@/lib/utils";

const WeAreSec = ({ className }) => {
  return (
    <section className={cn("py-20 relative bg-[#F3EDE5]", className)}>
      <Container className="flex items-center gap-32 relative z-10">
        <figure className="flex-[40%] rounded-xl overflow-hidden">
          <img
            src={weAreImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="flex-[60%] text-[17px]">
          <SectionTitle className="mb-6">We Are</SectionTitle>
          <div className="text-lg">
            <ul className="list-disc pl-5 space-y-4">
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
        </div>
      </Container>
    </section>
  );
};

export default WeAreSec;
