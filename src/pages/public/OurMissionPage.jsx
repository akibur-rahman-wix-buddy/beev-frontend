import PrimaryBanner from "@/components/shared/PrimaryBanner";
import React from "react";
import banner from "@/assets/images/banners/our-mission-banner.png";
import WhyWeExistSec from "@/sections/ourMission/WhyWeExistSec";
import WhatMakesDifferentSec from "@/sections/ourMission/WhatMakesDifferentSec";
import WhatWeOfferSec from "@/sections/ourMission/WhatWeOfferSec";
import WeAreSec from "@/sections/ourMission/WeAreSec";
import OurVisionSec from "@/sections/ourMission/OurVisionSec";

const OurMissionPage = () => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Our Mission", url: "#" },
  ];

  return (
    <section className="">
      <PrimaryBanner
        bgImg={banner}
        breadcrumbs={breadcrumbs}
        title="Our Mission"
        subTitle="We are here for those who don’t know how to ask. For those who have asked and were met with silence. For those who whisper their needs and hope someone hears. This is where someone does."
      />
      <WhyWeExistSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <WhatWeOfferSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <WhatMakesDifferentSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <WeAreSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <OurVisionSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
    </section>
  );
};

export default OurMissionPage;
