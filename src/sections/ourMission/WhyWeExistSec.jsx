import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import whyWeExistImg from "@/assets/images/sectionImages/why-we-exist.png";

import { cn } from "@/lib/utils";

const WhyWeExistSec = ({ className }) => {
  return (
    <section className={cn("xl:py-16 relative", className)}>
      <Container className="flex flex-col-reverse lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-60 relative z-10">
        <div className="lg:flex-[50%] xl:flex-[55%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 sm:text-center sm:mx-auto lg:text-left lg:mx-0">Why We Exist</SectionTitle>
          <div className="space-y-3 xl:space-y-4">
            <p className="">
              Our mission is to offer soft, compassionate support rooted in
              dignity, not performance. Whether you're seeking support or
              offering it, you belong here.
            </p>
            <p className="">
              Together, we’re creating quiet ripples of care, a reminder that we
              all matter.
            </p>
            <ul className="list-disc sm:list-inside lg:list-outside pl-4.5 sm:pl-0 lg:pl-4.5 space-y-2 sm:space-y-2.5 lg:space-y-3">
              <li>For the mother grieving with no one to talk to.</li>
              <li>
                For the person who can’t afford food but is too afraid to ask.
              </li>
              <li>
                For the quiet soul longing for a sign that they’re not alone.{" "}
              </li>
            </ul>
            <p className="font-semibold">You are not alone. You matter.</p>
            <p>
              Every heart is welcomed here, without judgment, shame, or
              expectation.
            </p>
            <p className="font-semibold">
              One Heart. One Society. One Circle of Care.
            </p>
          </div>
        </div>
        <figure className="lg:flex-[50%] xl:flex-[45%] max-w-[400px] md:max-w-full rounded-xl overflow-hidden lg:py-10 xl:py-0">
          <img
            src={whyWeExistImg}
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

export default WhyWeExistSec;
