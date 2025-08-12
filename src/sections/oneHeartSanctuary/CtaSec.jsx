import { RobotIcon, TelegramIcon } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const CtaSec = ({ className }) => {
  return (
    <section className={cn("bg-[#F3EDE5] overflow-hidden", className)}>
      <Container className="py-20 relative">
        <SectionTitle
          description="Whether you're hurting, healing, or longing for a haven to hold you… there's space for you here."
          className="max-w-[620px] mx-auto"
          center
        >
          This Space Was Made for You
        </SectionTitle>
        <div className="flex flex-col items-center gap-4">
          <Button className="rounded-full gap-4">
            <TelegramIcon className="!size-8 shrink-0" />
            Join the Sanctuary on Telegram
          </Button>
          <Button className="rounded-full gap-4">
            <RobotIcon className="!size-8 shrink-0" />
            Meet your AI companion on Telegram
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CtaSec;
