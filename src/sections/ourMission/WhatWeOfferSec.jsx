import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import whatWeOfferImg from "@/assets/images/sectionImages/what-we-offer.png";

import { cn } from "@/lib/utils";

const WhatWeOfferSec = ({ className }) => {
  return (
    <section className={cn("py-20 relative bg-[#F3EDE5]", className)}>
      <Container className="flex items-center gap-32 relative z-10">
        <figure className="flex-[40%] rounded-xl overflow-hidden">
          <img
            src={whatWeOfferImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="flex-[60%] text-[17px]">
          <SectionTitle className="mb-6">What We Offer</SectionTitle>
          <div className="text-lg space-y-4">
            <p>
              Through <span className="font-semibold">One Heart Sanctuary</span>
              , we offer quiet, around-the-clock support for those carrying
              invisible weight through
            </p>
            <ul className="list-disc pl-5 space-y-2">
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
