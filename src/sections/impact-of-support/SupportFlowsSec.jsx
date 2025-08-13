import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import {
  FeatherIcon,
  HandWithLoveIcon,
  HeartIcon3,
  MoonIcon,
} from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const SupportFlowsSec = ({ className }) => {
  const cardsData = [
    {
      title: "A Timely Act of Care",
      description:
        "Your giving helps our platform offer essentials such as food support, safe travel assistance, or moments of relief for those facing hardship.",
    },
    {
      title: "Restoring Comfort & Confidence",
      description:
        "From hygiene items to baby essentials, contributions help provide what’s needed for people to feel cared for, supported, and able to meet life with dignity.",
    },
    {
      title: "Bridging the Quiet Gaps",
      description:
        "Your support touches the quietest needs; the ones too tender to name, but deeply in need of care.",
    },
    {
      title: "A Moment of Human Connection",
      description:
        "With your help, someone struggling in the background receives a thoughtful gesture. Something that says: “You matter. Even now. Especially now.”",
    },
  ];

  return (
    <section className={cn("bg-[#F3EDE5]", className)}>
      <Container className="py-20">
        <div className="">
          <SectionTitle
            description="Your contribution helps meet meaningful, time-sensitive needs. Here's where your support makes a difference:"
            center
          >
            Understanding the Needs and How Support Flows
          </SectionTitle>
          <div className="grid grid-cols-2 gap-8">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SupportFlowsSec;

const Card = ({ title, description }) => {
  return (
    <div className="card rounded-2xl bg-[#FBF7F0] space-y-5 flex flex-row gap-5 p-8">
      <HandWithLoveIcon className="shrink-0" />
      <div className="space-y-3.5 py-2">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-primaryDescription text-lg">{description}</p>
      </div>
    </div>
  );
};
