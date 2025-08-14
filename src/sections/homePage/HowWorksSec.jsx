import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
} from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const HowWorksSec = ({ className }) => {
  const cardsData = [
    {
      icon: CardIcon1,
      title: "Quietly Ask for Help",
      description:
        "Choose your need: Financial, Emotional or Thoughtful. Submit it for private review. We may anonymously share your situation on our featured needs section. We respect you and your privacy.",
    },
    {
      icon: CardIcon2,
      title: "We Review and Prioritize",
      description:
        "Every request is reviewed with care and sincerity. Our team prioritizes based on urgency and emotional or financial need - not popularity. This ensures fair, heart-centered support.",
    },
    {
      icon: CardIcon3,
      title: "Supporters Give with Heart",
      description:
        "Supporters can give once or give monthly. Every gift given from the heart brings quiet, meaningful impact.",
    },
    {
      icon: CardIcon4,
      title: "Gentle Emotional Support",
      description:
        "One Heart Sanctuary is our private support space offering emotional care for those experiencing grief, anxiety, or overwhelm - so your heart can be held, even when the need isn’t financial.",
    },
  ];

  return (
    <section className={cn("bg-[#F3EDE5]", className)}>
      <Container className="py-20">
        <div className="">
          <SectionTitle
            description="One request. One act of care. One moment at a time."
            center
          >
            How It Works
          </SectionTitle>
          <div className="grid grid-cols-4 gap-5">
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

export default HowWorksSec;

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="card p-5 rounded-2xl bg-[#F3EDE5] space-y-5 flex flex-col items-center text-center">
      <Icon />
      <div className="space-y-3.5">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-primaryDescription">{description}</p>
      </div>
    </div>
  );
};
