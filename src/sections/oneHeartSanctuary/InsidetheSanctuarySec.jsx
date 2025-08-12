import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import {
  CorrectIcon,
  FeatherIcon,
  HeartIcon2,
  HeartIcon3,
  MoonIcon,
} from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const InsidetheSanctuarySec = ({ className }) => {
  const cardsData = [
    {
      title: "Private AI Companion",
      description:
        "24/7 access for members, free guest access (10 messages/day). Human support at select times.",
    },
    {
      title: "Grief Conversations",
      description:
        "Gentle prompts and reflections to help process loss and grief.",
    },
    {
      title: "Grounding During Overwhelm",
      description:
        "Practical exercises to bring you back to center when emotions surge.",
    },
    {
      title: "Forgiveness Paths",
      description:
        "Guided journeys toward releasing resentment and finding peace.",
    },
    {
      title: "Letter Writing",
      description:
        "Templates for expressing what needs to be said (to others or yourself).",
    },
    {
      title: "Guided Moments",
      description:
        "Simple, meaningful practices to mark moments and transitions.",
    },
    {
      title: "Healing Soundscapes",
      description:
        "Ambient audio designed to soothe the nervous system and create calm.",
    },
    {
      title: "Journaling Prompts",
      description:
        "Thoughtful questions to guide self-reflection and emotional processing.",
    },
  ];

  return (
    <section className={cn("bg-[#F3EDE5] overflow-hidden", className)}>
      <Container className="py-20 relative">
        <SectionTitle center>Inside the Sanctuary</SectionTitle>
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
        <HeartIcon2 className="absolute top-10 right-[-300px]" />
        <HeartIcon2 className="absolute bottom-5 left-[-300px]" />
      </Container>
    </section>
  );
};

export default InsidetheSanctuarySec;

const Card = ({ title, description }) => {
  return (
    <div className="card rounded-2xl bg-[#FBF7F0] space-y-5 flex flex-col p-8">
      <CorrectIcon />
      <div className="space-y-3.5">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-primaryDescription ">{description}</p>
      </div>
    </div>
  );
};
