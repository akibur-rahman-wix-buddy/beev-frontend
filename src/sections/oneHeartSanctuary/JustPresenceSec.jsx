import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import justPresenceImg from "@/assets/images/sectionImages/just-presence.png";
import { cn } from "@/lib/utils";
import { CorrectIcon } from "@/assets/icons/icons";

const JustPresenceSec = ({ className }) => {
  return (
    <section className={cn("xl:py-16 relative", className)}>
      <Container className="flex flex-col-reverse lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-60 relative z-10">
        <div className="lg:flex-[50%] xl:flex-[55%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 sm:text-center sm:mx-auto lg:text-left lg:mx-0 max-w-[90%]">
            No pressure, No performance. Just Presence.
          </SectionTitle>
          <div className="space-y-3 lg:space-y-4 xl:space-y-6">
            <p className="xl:pr-14">
              We've created this space with your emotional safety as our highest
              priority. Every aspect is designed to give you control over your
              experience.
            </p>
            <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 xl:space-y-4">
              {[
                "Anonymous entry",
                "Share only what you feel",
                "Free entry, with extra support for members",
              ].map((item, idx) => (
                <div className="flex items-center sm:justify-center lg:justify-start gap-3" key={idx}>
                  <CorrectIcon className="size-4.5 lg:size-6  sm:hidden lg:block shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <figure className="lg:flex-[50%] xl:flex-[45%] max-w-[400px] md:max-w-full rounded-xl overflow-hidden lg:py-10 xl:py-0">
          <img
            src={justPresenceImg}
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

export default JustPresenceSec;
