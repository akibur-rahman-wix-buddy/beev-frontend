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
      <OneHeartSanctuaryHeroSec />
      <RealDetailsSec className="my-20" />
      <MeetOurAICompanionSec className="my-20" />
      <InsidetheSanctuarySec className="my-20" />
      <JustPresenceSec className="my-20" />
      <CtaSec className="my-20" />
    </section>
  );
};

export default OneHeartSanctuaryPage;
