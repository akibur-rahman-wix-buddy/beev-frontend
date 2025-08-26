import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
import { cn } from "@/lib/utils";

const BehindMissionSec = ({ className }) => {
  const cardsData = [
    {
      image: card1,
      title: "A soft place to land when life feels heavy",
      description:
        "For those carrying quiet struggles - like food insecurity, grief, or just needing to feel remembered - this space offers a gentle way to ask for help without shame.",
    },
    {
      image: card2,
      title: "Giving rooted in compassion and solidarity",
      description:
        "Supporters can give once or monthly. Every gift - whether offered quietly or shared to inspire others - brings meaningful impact and helps grow this circle of care.",
    },
    {
      image: card3,
      title: "A community that remembers each other in quiet moments of need",
      description:
        "One Heart Society is a haven for care and connection. We offer emotional and practical support in a safe, compassionate space where every person is met with dignity and respect.",
    },
  ];

  return (
    <Container className={cn("", className)}>
      <SectionTitle center>The Heart Behind the Mission</SectionTitle>
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-3 gap-5 xl:gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default BehindMissionSec;

const Card = ({ image, title, description }) => {
  return (
    <div className="card p-3 md:p-4 xl:p-5 rounded-lg md:rounded-xl xl:rounded-2xl bg-[#F3EDE5] space-y-3 md:space-y-4 xl:space-y-5 flex-1 min-w-[280px]">
      <figure className="w-full aspect-[400/250] rounded-lg xl:rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div className="space-y-2.5 md:space-y-3 xl:space-y-3.5">
        <h3 className="text-lg xl:text-xl font-medium">{title}</h3>
        <p className="text-sm xl:text-base text-primaryDescription">
          {description}
        </p>
      </div>
    </div>
  );
};
