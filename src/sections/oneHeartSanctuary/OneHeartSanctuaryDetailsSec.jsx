import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import somePainFreeImg from "@/assets/images/sectionImages/some-pain-free.png";
import sideSecImg from "@/assets/images/sideSecImg.jpg";
import { cn } from "@/lib/utils";
import { HeartIcon2 } from "@/assets/icons/icons";

const OneHeartSanctuaryDetailsSec = ({ className }) => {
  return (
    <section className={cn("relative", className)}>
      <div className="flex flex-col-reverse lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-16 z-10">
        <div className="lg:flex-[50%] xl:flex-[60%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 xl:!mb-9 sm:text-center sm:mx-auto lg:text-left lg:mx-0">Some pain isn't visible.</SectionTitle>
          <div className="space-y-5 sm:space-y-6 lg:space-y-7 max-w-[640px]">
            <p>
              In our world of constant connection, many still suffer in silence.
              The midnight hours when grief feels heaviest. The moments when
              words fail but the heart still aches.
            </p>
            <p>
              One Heart Sanctuary was born from a simple truth: we all need a
              space where we can bring our whole selves, our pain, our
              questions, our longing for meaning.
            </p>
            <p>
              A gathering place that holds both wisdom and modern understanding.
              Where technology serves humanity, not the other way around.
            </p>
          </div>
        </div>
        <div className="lg:flex-[50%] xl:flex-[40%] max-w-[400px] md:max-w-full rounded-xl relative">
          <figure className="rounded-xl w-full overflow-hidden">
            <img
              src={somePainFreeImg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="hidden md:block lg:hidden xl:block absolute bottom-10 right-0 xl:right-full [@media_(min-width:1650px)]:right-0 translate-x-1/2 size-[200px] rounded-xl border-10 bg-white border-white overflow-hidden shadow-xl">
            <img
              src={sideSecImg}
              className="w-full h-full object-cover object-center rounded-lg overflow-hidden"
              alt=""
            />
          </figure>
        </div>
      </div>
      <HeartIcon2 className="absolute top-0 -translate-y-1/2 left-full z-10" />
    </section>
  );
};

export default OneHeartSanctuaryDetailsSec;
