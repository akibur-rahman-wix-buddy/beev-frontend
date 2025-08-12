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
          <div className="space-y-7 max-w-[620px]">
            <p>
              Every day, someone arrives here carrying something heavy - grief,
              shame, overwhelm, financial strain, or emotional collapse. Some
              are quietly falling apart. Others just need to know they are not
              alone.
            </p>
            <p>The Circle turns compassion into action.</p>
            <p>
              Your presence helps us meet delicate needs with care, create
              moments of genuine connection, and remind people that they matter.
              When you Join the Circle, you become part of a living network of
              hearts committed to looking out for one another.
            </p>
            <p>
              Together, we create a space where even in the hardest moments,
              kindness can still be found.
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
