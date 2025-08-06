import AboutFounderSec from "@/sections/homePage/AboutFounderSec";
import BannerSec from "@/sections/homePage/BannerSec";
import BehindMissionSec from "@/sections/homePage/BehindMissionSec";
import CommunitySec from "@/sections/homePage/CommunitySec";
import FaqSec from "@/sections/homePage/FaqSec";
import HowWorksSec from "@/sections/homePage/HowWorksSec";

function Home() {
  return (
    <>
      <BannerSec />
      <BehindMissionSec className="my-20" />
      <HowWorksSec className="my-20" />
      <AboutFounderSec className="my-20" />
      <CommunitySec className="my-20" />
      <FaqSec className="my-20" />
    </>
  );
}

export default Home;
