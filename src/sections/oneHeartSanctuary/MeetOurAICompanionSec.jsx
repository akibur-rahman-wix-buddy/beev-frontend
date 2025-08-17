import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import meetOurAICompanionImg from "@/assets/images/sectionImages/meet-our-ai-companion.png";
import { cn } from "@/lib/utils";
import { CorrectIcon } from "@/assets/icons/icons";

const MeetOurAICompanionSec = ({ className }) => {
  return (
    <section className={cn("py-16 relative", className)}>
      <Container className="flex items-center gap-32 relative z-10">
        <figure className="flex-[40%] rounded-xl overflow-hidden">
          <img
            src={meetOurAICompanionImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="flex-[60%] text-[17px]">
          <SectionTitle className="mb-6">
            When Pain Comes at 2AM - Meet Our AI Companion
          </SectionTitle>
          <div className=" text-lg space-y-6">
            <p className="">
              Our gentle AI companion is there to hold space when you need it
              most. Because we know that sometimes the hardest moments happen
              during hours where support is less likely to be found. One Heart
              Companion is a comforting presence in your darkest hours through
            </p>
            <div className="space-y-4">
              {[
                "Trauma-informed responses that meet you where you are",
                "Reflective, gentle voice that mirrors your humanity",
                "Guides you through grounding exercises when overwhelm hits",
              ].map((item, idx) => (
                <div className="flex items-center gap-3" key={idx}>
                  <CorrectIcon />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 flex">
        <div className="right flex-[calc(50%-450px)] bg-[#F3EDE5] rounded-r-2xl"></div>
        <div className="left flex-[calc(50%+450px)]"></div>
      </div>
    </section>
  );
};

export default MeetOurAICompanionSec;
