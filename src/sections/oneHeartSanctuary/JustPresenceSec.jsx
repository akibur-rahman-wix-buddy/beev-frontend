import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import justPresenceImg from "@/assets/images/sectionImages/just-presence.png";
import { cn } from "@/lib/utils";
import { CorrectIcon } from "@/assets/icons/icons";

const JustPresenceSec = ({ className }) => {
  return (
    <section className={cn("py-16 relative", className)}>
      <Container className="flex items-center gap-60 relative z-10">
        <div className="flex-[55%] text-[17px]">
          <SectionTitle className="mb-6 pr-8">
            No pressure, No performance, Just Presence.
          </SectionTitle>
          <div className=" text-lg space-y-6">
            <p className="pr-14">
              We've created this private space with your emotional safety as our
              highest priority. Every aspect is designed to give you control
              over your experience.
            </p>
            <div className="space-y-4">
              {[
                "Anonymous entry",
                "Share only what you feel",
                "Free entry, with extra support for members",
              ].map((item, idx) => (
                <div className="flex items-center gap-3" key={idx}>
                  <CorrectIcon />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <figure className="flex-[45%] rounded-xl overflow-hidden">
          <img
            src={justPresenceImg}
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

export default JustPresenceSec;
