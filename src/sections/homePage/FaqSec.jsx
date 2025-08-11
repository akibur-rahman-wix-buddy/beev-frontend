import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FaqSec = ({ className }) => {
  const faqData = [
    {
      question: "What is One Heart Society?",
      answer:
        "One Heart Society is a platform for compassionate support. We share meaningful needs and invite supporters to contribute toward these needs through our community space. Although we’re not a charity or peer-to-peer service but we provide a managed, heart-centered platform experience that connects support where it’s needed while maintaining privacy and dignity.",
    },
    {
      question: "Who can ask for help?",
      answer:
        "AAnyone who needs to be seen, heard, or held with care. We believe in whole-person support, not just meeting needs, but tending to the heart through gentle encouragement and emotional presence. It’s how we begin to restore sincerity, belonging, and trust in one another in the world.",
    },
    {
      question: "How do I ask for help?",
      answer:
        "Submit your need through our private form. Every request is reviewed with an open heart. Some may be featured anonymously to offer supporters a clearer picture of where help is needed. Many other needs remain unseen, but all are held with the same care and fulfilled as support becomes available.",
    },
    {
      question: "How much help can I ask for?",
      answer:
        "At this time, requests are limited to a maximum of $100. This helps us stretch the available support and care for more people. As we grow and build steady monthly backing, we hope to increase this amount in the future and say yes to more needs.",
    },
    {
      question: "How can I give?",
      answer:
        "You’re welcome to offer a one-time contribution or become a monthly supporter. All contributions flow through the platform and are directed thoughtfully toward the care we hold space for.",
    },
    {
      question: "How is the money used?",
      answer:
        "Each contribution supports the platform’s mission of quiet, dignified care. A portion goes toward maintaining this safe space, reviewing needs, and responding to private requests that aren’t shared publicly. The rest is distributed to thoughtfully reviewed needs through our internal process.",
    },
  ];

  return (
    <Container className={cn("", className)}>
      <div className="flex flex-col items-center">
        <SectionTitle center>Frequently Asked Questions</SectionTitle>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-5 mb-9"
          defaultValue="item-1"
        >
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button variant="outline">More FAQs</Button>
      </div>
    </Container>
  );
};

export default FaqSec;
