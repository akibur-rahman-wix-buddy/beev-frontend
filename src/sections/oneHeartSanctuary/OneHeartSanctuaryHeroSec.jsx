import { RobotIcon, TelegramIcon } from "@/assets/icons/icons";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import OneHeartSanctuaryDetailsSec from "./OneHeartSanctuaryDetailsSec";

const OneHeartSanctuaryHeroSec = ({className}) => {
  return (
    <section className={`overflow-hidden ${className}`}>
      <Container className="">
        <Breadcrumb
          breadcrumbs={[
            { label: "Home", url: "/" },
            { label: "One Heart Sanctuary", url: "#" },
          ]}
        />
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          <SectionTitle
            description="For the silent moments, midnight griefs, and unspoken pain - you are not alone."
            className="max-w-[1000px] mx-auto"
            center
          >
            A sacred space for emotional and spiritual care held by human
            hearts, supported by gentle technology.
          </SectionTitle>
          <div className="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-16 md:px-0">
            <Button className="lg:w-[400px] rounded-full gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6">
              <TelegramIcon className="!size-6 sm:!size-7 lg:!size-8 shrink-0" />
              <span className="hidden sm:inline">
                Join the Sanctuary on Telegram
              </span>
              <span className="sm:hidden">Join Sanctuary</span>
            </Button>
            <Button className="rounded-full gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6">
              <RobotIcon className="!size-6 sm:!size-7 lg:!size-8 shrink-0" />
              <span className="hidden sm:inline">
                Meet your AI companion on Telegram
              </span>
              <span className="sm:hidden">Meet AI Companion</span>
            </Button>
          </div>
          <OneHeartSanctuaryDetailsSec className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20" />
        </div>
      </Container>
    </section>
  );
};

export default OneHeartSanctuaryHeroSec;
