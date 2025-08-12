import { RobotIcon, TelegramIcon } from "@/assets/icons/icons";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import OneHeartSanctuaryDetailsSec from "./OneHeartSanctuaryDetailsSec";

const OneHeartSanctuaryHeroSec = () => {
  return (
    <section className="overflow-hidden">
      <Container className="">
        <Breadcrumb
          breadcrumbs={[
            { label: "Home", url: "/" },
            { label: "One Heart Sanctuary", url: "#" },
          ]}
        />
        <div className="my-20">
          <SectionTitle
            description="For the silent moments, midnight griefs, and unspoken pain - you are not alone."
            className="max-w-[1000px] mx-auto"
            center
          >
            A sacred space for emotional and spiritual care held by human
            hearts, supported by gentle technology.
          </SectionTitle>
          <div className="flex justify-center gap-8">
            <Button className="rounded-full gap-4">
              <TelegramIcon className="!size-8 shrink-0" />
              Join the Sanctuary on Telegram
            </Button>
            <Button className="rounded-full gap-4">
              <RobotIcon className="!size-8 shrink-0" />
              Meet your AI companion on Telegram
            </Button>
          </div>
          <OneHeartSanctuaryDetailsSec className="my-20" />
        </div>
      </Container>
    </section>
  );
};

export default OneHeartSanctuaryHeroSec;
