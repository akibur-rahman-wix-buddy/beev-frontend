import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import founderImg from "@/assets/images/founder.png";
import { cn } from "@/lib/utils";

const AboutFounderSec = ({ className }) => {
  return (
    <section className={cn("lg:py-16 xl:py-20 relative", className)}>
      <Container className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 xl:gap-16 relative z-10">
        <figure className="lg:flex-[45%] aspect-square sm:aspect-video lg:aspect-auto rounded-xl overflow-hidden">
          <img
            src={founderImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="lg:flex-[55%] text-primaryDescription text-sm sm:text-[15px] xl:text-[17px] space-y-3 xl:space-y-6">
          <SectionTitle className="text-textPrimary !mb-4 xl:mb-8">
            About The Founder
          </SectionTitle>
          <p>
            Hi, I’m Lynn. A mother, a listener, and someone who knows what it’s
            like to need help, even when it’s hard to ask.
          </p>
          <p>
            One Heart Society didn’t begin with a business plan. It began with a
            silent question:
          </p>
          <p className="font-medium text-textPrimary">
            What if asking for help could feel more human and less
            transactional?
          </p>
          <p>
            I’ve felt the weight of being overwhelmed and unseen. I’ve known the
            fear of reaching out, and the silence that sometimes answers back.
            I’ve noticed how traditional systems can make people feel more like
            problems than people.
          </p>
          <p>
            This space was created for those who've ever felt invisible. We
            exist to remind you that you are seen, you are valued, and you are
            worthy of care. Welcome to our space, created in softness, dignity,
            and shared humanity. A place where presence matters more than
            perfection.
          </p>
          <p className="font-medium text-textPrimary">
            One Heart Society is here to say: You’re not alone. You are worthy
            of care. Always.
          </p>
        </div>
      </Container>
      <div className="absolute inset-0 hidden lg:flex">
        <div className="left flex-[calc(50%-260px)] xl:flex-[calc(50%-350px)] bg-[#F3EDE5] rounded-r-2xl"></div>
        <div className="right flex-[calc(50%+260px)] xl:flex-[calc(50%+350px)]"></div>
      </div>
    </section>
  );
};

export default AboutFounderSec;
