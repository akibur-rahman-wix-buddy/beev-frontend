import PrimaryBanner from "@/components/shared/PrimaryBanner";
import React from "react";
import banner from "@/assets/images/banners/join-the-circle-banner.png";
import { HeartGrayIcon } from "@/assets/icons/icons";
import JoinTheCircleDetailsSec from "@/sections/JoinTheCircle/JoinTheCircleDetailsSec";
import JoinTheCircleBenefitsSec from "@/sections/JoinTheCircle/JoinTheCircleBenefitsSec";
import HelpingHandSec from "@/sections/JoinTheCircle/HelpingHandSec";

const JoinTheCirclePage = () => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Join The Circle", url: "#" },
  ];

  return (
    <section className="pt-28">
      <PrimaryBanner
        bgImg={banner}
        breadcrumbs={breadcrumbs}
        title="Join The Circle"
        subTitle="Help us care for the hearts that need it most."
      />
      <JoinTheCircleDetailsSec className="my-20" />
      <JoinTheCircleBenefitsSec className="my-20" />
      <HelpingHandSec className="my-20" />
      {/* <HeartGrayIcon /> */}
    </section>
  );
};

export default JoinTheCirclePage;
