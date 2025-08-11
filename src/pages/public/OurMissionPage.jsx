import PrimaryBanner from "@/components/shared/PrimaryBanner";
import React from "react";
import banner from "@/assets/images/banners/join-the-circle-banner.png";
import JoinTheCircleDetailsSec from "@/sections/JoinTheCircle/JoinTheCircleDetailsSec";
import JoinTheCircleBenefitsSec from "@/sections/JoinTheCircle/JoinTheCircleBenefitsSec";
import HelpingHandSec from "@/sections/JoinTheCircle/HelpingHandSec";
import JoinTheCirclePaymentSec from "@/sections/JoinTheCircle/JoinTheCirclePaymentSec";

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
      <div className="py-50"></div>
      {/* <JoinTheCircleDetailsSec className="my-20" />
      <JoinTheCircleBenefitsSec className="my-20" />
      <HelpingHandSec className="my-20" />
      <JoinTheCirclePaymentSec className="mt-20" /> */}
    </section>
  );
};

export default OurMissionPage;
