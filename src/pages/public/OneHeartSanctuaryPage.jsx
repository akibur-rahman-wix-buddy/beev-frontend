import OneHeartSanctuaryHeroSec from "@/sections/oneHeartSanctuary/OneHeartSanctuaryHeroSec";
import RealDetailsSec from "@/sections/oneHeartSanctuary/RealDetailsSec";
import React from "react";

const OneHeartSanctuaryPage = () => {
  return (
    <section className="pt-8">
      <OneHeartSanctuaryHeroSec />
      <RealDetailsSec className="my-20" />
    </section>
  );
};

export default OneHeartSanctuaryPage;
