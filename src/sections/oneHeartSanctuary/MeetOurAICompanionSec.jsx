import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import meetOurAICompanionImg from "@/assets/images/sectionImages/meet-our-ai-companion.png";
import { cn } from "@/lib/utils";
import { CorrectIcon } from "@/assets/icons/icons";

const MeetOurAICompanionSec = ({ className }) => {
  return (
    <section className={cn("xl:py-16 relative", className)}>
      <Container className="flex flex-col lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-32 relative z-10">
        <figure className="lg:flex-[50%] xl:flex-[45%] max-w-[400px] md:max-w-full rounded-xl overflow-hidden lg:py-10 xl:py-0">
          <img
            src={meetOurAICompanionImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="lg:flex-[50%] xl:flex-[55%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 sm:text-center sm:mx-auto lg:text-left lg:mx-0">
            When Pain Comes at 2AM - Meet Our AI Companion
          </SectionTitle>
          <div className="space-y-3 lg:space-y-4 xl:space-y-6">
            <p className="">
              Our gentle AI companion is there to hold space when you need it
              most. Because we know that sometimes the hardest moments happen
              during hours where support is less likely to be found. One Heart
              Companion is a comforting presence in your darkest hours through
            </p>
            <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 xl:space-y-4">
              {[
                "Trauma-informed responses that meet you where you are",
                "Reflective, gentle voice that mirrors your humanity",
                "Guides you through grounding exercises when overwhelm hits",
              ].map((item, idx) => (
                <div
                  className="flex items-center sm:justify-center lg:justify-start gap-3"
                  key={idx}
                >
                  <CorrectIcon className="size-4.5 lg:size-6  sm:hidden lg:block shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 hidden lg:flex">
        <div className="left flex-[calc(50%-250px)] xl:flex-[calc(50%-420px)] bg-[#F3EDE5] rounded-r-2xl"></div>
        <div className="right flex-[calc(50%+250px)] xl:flex-[calc(50%+420px)]"></div>
      </div>
    </section>
  );
};

export default MeetOurAICompanionSec;
