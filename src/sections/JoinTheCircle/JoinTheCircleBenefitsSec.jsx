import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import { DocumentsIcon, LoveIcon2, MsgLifterIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import parse from "html-react-parser";

const JoinTheCircleBenefitsSec = ({ className }) => {
  const cardsData = [
    {
      icon: DocumentsIcon,
      title: "Witness & Supporter",
      description:
        "Spread the Word & Support. Even the smallest actions can ripple far.",
      points: [
        "Share One Heart Society with someone who might need it",
        "Help us reach more hearts by spreading the word",
        "Follow us on Instagram and amplify our message of compassion",
      ],
    },
    {
      icon: LoveIcon2,
      title: "Extend Private Care",
      description: "Sometimes, the most urgent needs aren’t shared publicly.",
      points: [
        "Help provide food, essentials, or safe transport",
        "Support requests shared quietly or anonymously",
        "Unseen and unlisted needs are honored with great care",
      ],
    },
    {
      icon: MsgLifterIcon,
      title: "Message Lifter",
      description: "Share words of encouragement, hope, or healing.",
      points: [
        "Leave a kind note on <b>The Heart Wall</b>",
        "Send thoughtful messages or affirmations to someone going through a hard time",
        "Share your story to inspire others",
      ],
      shareStory: true,
    },
  ];

  return (
    <section className={cn("bg-[#F3EDE5]", className)}>
      <Container className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-24">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              points={card.points}
              shareStory={card?.shareStory}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default JoinTheCircleBenefitsSec;

const Card = ({
  icon: Icon,
  title,
  description,
  points,
  shareStory = false,
}) => {
  return (
    <div className="space-y-4 w-full text-sm sm:text-base xl:text-lg">
      <div className="flex items-center gap-2.5">
        <div className="size-10 sm:size-11 xl:size-12 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Icon className="size-4.5 sm:size-5 xl:size-6" />
        </div>
        <h3 className="text-lg xl:text-xl font-medium text-primary">{title}</h3>
      </div>
      <p className="">{description}</p>
      {points && points.length > 0 && (
        <ul className="list-disc pl-4.5 space-y-2 sm:space-y-3">
          {points.map((point, index) => (
            <li key={index} className="">
              {parse(point)}
            </li>
          ))}
        </ul>
      )}
      {shareStory && (
        <Link
          to="/the-heart-wall"
          className="text-primary flex items-center gap-1.5 hover:[&>svg]:-rotate-45 [&>svg]:transition-all [&>svg]:duration-300"
        >
          Share your Story <ArrowRight className="size-4 sm:size-5" />
        </Link>
      )}
    </div>
  );
};
