import { RobotIcon, TelegramIcon } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const CtaSec = ({ className }) => {
  return (
    <section className={cn("bg-[#F3EDE5] overflow-hidden", className)}>
      <Container className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 relative">
        <SectionTitle
          description="Whether you're hurting, healing, or longing for a haven to hold you… there's space for you here."
          className="max-w-[620px] mx-auto mb-6 md:mb-8"
          center
        >
          This Space Was Made for You
        </SectionTitle>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-2 sm:gap-3 lg:gap-4 max-w-2xl mx-auto">
          <Button className="rounded-full gap-2 md:gap-4 w-auto px-4 md:px-6 py-2 md:py-3 text-sm md:text-base">
            <TelegramIcon className="!size-6 md:!size-8 shrink-0" />
            <span className="whitespace-nowrap">
              Join the Sanctuary on Telegram
            </span>
          </Button>
          <Button className="rounded-full gap-2 md:gap-4 w-auto px-4 md:px-6 py-2 md:py-3 text-sm md:text-base">
            <RobotIcon className="!size-6 md:!size-8 shrink-0" />
            <span className="whitespace-nowrap">
              Meet your AI companion on Telegram
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CtaSec;
