import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import somePainFreeImg from "@/assets/images/sectionImages/some-pain-free.png";
import sideSecImg from "@/assets/images/sideSecImg.jpg";
import { cn } from "@/lib/utils";
import { HeartIcon2 } from "@/assets/icons/icons";

const OneHeartSanctuaryDetailsSec = ({ className }) => {
  return (
    <section className={cn("relative", className)}>
      <div className="flex items-center gap-16 z-10">
        <div className="flex-[60%] text-lg">
          <SectionTitle className="mb-9">Some pain isn't visible.</SectionTitle>
          <div className="space-y-7 max-w-[640px]">
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
        <div className="flex-[40%] relative">
          <figure className="rounded-xl w-full overflow-hidden">
            <img
              src={somePainFreeImg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="absolute bottom-10 right-0 translate-x-1/2 size-[200px] rounded-xl border-10 bg-white border-white overflow-hidden shadow-2xl">
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
