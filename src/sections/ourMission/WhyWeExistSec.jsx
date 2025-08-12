import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import whyWeExistImg from "@/assets/images/sectionImages/why-we-exist.png";

import { cn } from "@/lib/utils";

const WhyWeExistSec = ({ className }) => {
  return (
    <section className={cn("py-16 relative", className)}>
      <Container className="flex items-center gap-60 relative z-10">
        <div className="flex-[55%] text-[17px]">
          <SectionTitle className="mb-6">Why We Exist</SectionTitle>
          <div className=" text-lg space-y-4">
            <p className="">
              Our mission is to offer soft, compassionate support rooted in
              dignity, not performance. Whether you're seeking support or
              offering it, you belong here.
            </p>
            <p className="">
              Together, we’re creating quiet ripples of care, a reminder that we
              all matter.
            </p>
            <div className="">
              <li>For the mother grieving with no one to talk to.</li>
              <li>
                For the person who can’t afford food but is too afraid to ask.
              </li>
              <li>
                For the quiet soul longing for a sign that they’re not alone.{" "}
              </li>
            </div>
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
        <figure className="flex-[45%] rounded-xl overflow-hidden">
          <img
            src={whyWeExistImg}
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

export default WhyWeExistSec;
