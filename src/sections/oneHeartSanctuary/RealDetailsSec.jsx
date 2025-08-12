import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import { FeatherIcon, HeartIcon3, MoonIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const RealDetailsSec = ({ className }) => {
  const cardsData = [
    {
      icon: HeartIcon3,
      title: "Human presence",
      description:
        "We are centered in trauma-informed support and spiritual care. Technology enhances but never replaces the human connection.",
    },
    {
      icon: MoonIcon,
      title: "Weekly Check-ins",
      description:
        "We offer gentle structures to support your journey through finding a healing rhythm in difficult times.",
    },
    {
      icon: FeatherIcon,
      title: "An intentional space",
      description:
        "Our sanctuary isn't meant to replace therapy but to enhance human connection and heal through community sharing and thoughtfulness.",
    },
  ];

  return (
    <section className={cn("bg-[#F3EDE5]", className)}>
      <Container className="py-20">
        <div className="">
          <SectionTitle center>
            Real people. Real hearts. Real compassion.
          </SectionTitle>
          <div className="grid grid-cols-3 gap-8">
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

export default RealDetailsSec;

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="card rounded-2xl bg-[#FBF7F0] space-y-5 flex flex-col p-8">
      <Icon />
      <div className="space-y-3.5">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-primaryDescription text-lg">{description}</p>
      </div>
    </div>
  );
};
