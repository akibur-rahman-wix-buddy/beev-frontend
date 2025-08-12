import PrimaryBanner from "@/components/shared/PrimaryBanner";
import React from "react";
import banner from "@/assets/images/banners/join-the-circle-banner.png";
import JoinTheCircleDetailsSec from "@/sections/JoinTheCircle/JoinTheCircleDetailsSec";
import JoinTheCircleBenefitsSec from "@/sections/JoinTheCircle/JoinTheCircleBenefitsSec";
import HelpingHandSec from "@/sections/JoinTheCircle/HelpingHandSec";
import JoinTheCirclePaymentSec from "@/sections/JoinTheCircle/JoinTheCirclePaymentSec";
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
        subTitle="We are here for the ones who don’t know how to ask. For the ones who have asked and were met with silence. For the ones who whisper their needs and hope someone hears. This is where someone does."
      />
      <WhyWeExistSec className="my-20" />
      <WhatWeOfferSec className="my-20" />
      <WhatMakesDifferentSec className="my-20" />
      <WeAreSec className="my-20" />
      <OurVisionSec className="my-20" />
    </section>
  );
};

export default OurMissionPage;
