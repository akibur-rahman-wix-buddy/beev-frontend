import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import whatWeOfferImg from "@/assets/images/sectionImages/what-we-offer.png";

import { cn } from "@/lib/utils";

const WhatWeOfferSec = ({ className }) => {
  return (
    <section
      className={cn(
        "py-8 md:py-10 lg:py-12 xl:py-16 relative bg-[#F3EDE5]",
        className
      )}
    >
      <Container className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-32 relative z-10">
        <figure className="md:flex-[50%] xl:flex-[40%] rounded-xl overflow-hidden max-w-[400px] md:max-w-full">
          <img
            src={whatWeOfferImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="md:flex-[50%] xl:flex-[60%] text-[15px] sm:text-base xl:text-lg">
          <SectionTitle className="!mb-3 lg:!mb-6">What We Offer</SectionTitle>
          <div className="space-y-3 xl:space-y-4">
            <p>
              Through <span className="font-semibold">One Heart Sanctuary</span>
              , we offer quiet, around-the-clock support for those carrying
              invisible weight through
            </p>
            <ul className="list-disc pl-4.5 space-y-2 sm:space-y-2.5 lg:space-y-3">
              <li>Healing prompts, guided support, and forgiveness pathways</li>
              <li>
                Live, heartfelt presence from the community, including gentle
                weekly check-ins
              </li>
              <li>A compassionate AI companion, always available</li>
              <li>
                A soft landing for grief, for release, for being held when the
                world rushes on
              </li>
            </ul>
            <p>
              Beyond the Sanctuary, we hold space for financial and thoughtful
              needs as well; from help with food and essentials to gentle
              support on a painful anniversary or the loss of a loved one. Every
              request is carefully reviewed by our team. Thanks to the
              generosity of one-time and monthly supporters, we're able to
              respond to urgent and sensitive needs with care and dignity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeOfferSec;
