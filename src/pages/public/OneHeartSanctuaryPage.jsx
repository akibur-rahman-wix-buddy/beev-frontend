import CtaSec from "@/sections/oneHeartSanctuary/CtaSec";
import InsidetheSanctuarySec from "@/sections/oneHeartSanctuary/InsidetheSanctuarySec";
import JustPresenceSec from "@/sections/oneHeartSanctuary/JustPresenceSec";
import MeetOurAICompanionSec from "@/sections/oneHeartSanctuary/MeetOurAICompanionSec";
import OneHeartSanctuaryHeroSec from "@/sections/oneHeartSanctuary/OneHeartSanctuaryHeroSec";
import RealDetailsSec from "@/sections/oneHeartSanctuary/RealDetailsSec";
import React from "react";

const OneHeartSanctuaryPage = () => {
  return (
    <section className="pt-8">
      {/* <OneHeartSanctuaryHeroSec /> */}
      <RealDetailsSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      {/* <MeetOurAICompanionSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" /> */}
      <InsidetheSanctuarySec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      {/* <JustPresenceSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" /> */}
      <CtaSec className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20" />
    </section>
  );
};

export default OneHeartSanctuaryPage;
