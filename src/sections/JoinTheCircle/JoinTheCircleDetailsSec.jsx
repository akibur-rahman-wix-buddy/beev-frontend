import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import joinCircle from "@/assets/images/join-circle.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const JoinTheCircleDetailsSec = ({ className }) => {
  return (
    <section className={cn("xl:py-16 relative", className)}>
      <Container className="flex flex-col-reverse lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-60 relative z-10">
        <div className="lg:flex-[50%] xl:flex-[55%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 xl:!mb-9 sm:text-center sm:mx-auto lg:text-left lg:mx-0">
            Join The Circle
          </SectionTitle>
          <div className="space-y-3 lg:space-y-4 xl:space-y-7 xl:max-w-[620px]">
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
              When you Join The Circle, you become part of a living network of
              hearts committed to looking out for one another.
            </p>
            <p>
              Together, we create a space where even in the hardest moments,
              kindness can still be found.
            </p>
            <Button asChild>
              <Link to="#">
                <FaInstagram className="size-6" />
                Follow Us On Instagram
              </Link>
            </Button>
          </div>
        </div>
        <figure className="lg:flex-[50%] xl:flex-[45%] max-w-[400px] md:max-w-full rounded-xl overflow-hidden lg:py-10 xl:py-0">
          <img
            src={joinCircle}
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

export default JoinTheCircleDetailsSec;
