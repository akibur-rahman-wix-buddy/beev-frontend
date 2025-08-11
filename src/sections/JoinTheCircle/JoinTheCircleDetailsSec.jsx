import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import joinCircle from "@/assets/images/join-circle.png";
import { cn } from "@/lib/utils";

const JoinTheCircleDetailsSec = ({ className }) => {
  return (
    <section className={cn("py-20 relative", className)}>
      <Container className="flex items-start gap-16 relative z-10">
        <div className="flex-[55%] text-lg">
          <SectionTitle className="mb-9">Join The Circle</SectionTitle>
          <div className="space-y-10 max-w-[620px]">
            <p>
              Every day, someone lands in this space holding something heavy.
              Grief. Shame. Overwhelm. Financial strain. Emotional collapse.
              Some of them are quietly falling apart. Some just need to know
              they’re not alone.
            </p>
            <p>
              When you Join the Circle, you become part of how we care for one
              another.
            </p>
          </div>
        </div>
        <figure className="flex-[45%] rounded-xl overflow-hidden">
          <img
            src={joinCircle}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </Container>
      <div className="absolute inset-0 flex">
        <div className="left flex-[calc(50%+350px)]"></div>
        <div className="right flex-[calc(50%-350px)] bg-[#F3EDE5] rounded-l-2xl"></div>
      </div>
    </section>
  );
};

export default JoinTheCircleDetailsSec;
