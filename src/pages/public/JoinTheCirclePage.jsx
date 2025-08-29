import PrimaryBanner from "@/components/shared/PrimaryBanner";
import React from "react";
// import banner from "@/assets/images/banners/join-the-circle-banner.png";
import banner from "@/assets/images/banners/join-the-circle-banner-2.jpeg";
import JoinTheCircleDetailsSec from "@/sections/JoinTheCircle/JoinTheCircleDetailsSec";
import JoinTheCircleBenefitsSec from "@/sections/JoinTheCircle/JoinTheCircleBenefitsSec";
import HelpingHandSec from "@/sections/JoinTheCircle/HelpingHandSec";
import JoinTheCirclePaymentSec from "@/sections/JoinTheCircle/JoinTheCirclePaymentSec";

const JoinTheCirclePage = () => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Join The Circle", url: "#" },
  ];

  return (
    <section className="">
      <PrimaryBanner
        bgImg={banner}
        breadcrumbs={breadcrumbs}
        title="Join The Circle"
        subTitle="Help us care for the hearts that need it most."
      />
      <JoinTheCircleDetailsSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <JoinTheCircleBenefitsSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      {/* <HelpingHandSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <JoinTheCirclePaymentSec className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20" /> */}
    </section>
  );
};

export default JoinTheCirclePage;
