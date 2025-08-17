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
import { Link } from "react-router";

const FaqSec = ({ className }) => {
  const faqData = [
    {
      question: "What is One Heart Society?",
      answer:
        "We are an impact-based, heart-led platform transforming kindness into action and connection into care. Together, we create space for understanding and shared impact.",
    },
    {
      question: "Who can ask for help?",
      answer:
        "Anyone who feels a small act of kindness could help them through a difficult moment is encouraged to ask.",
    },
    {
      question: "How do I ask for help?",
      answer:
        'You can share your need through our "I Have a Need" form. We’ll hold your request with care and see how we may be able to respond as resources allow.',
    },
    {
      question: "How much help can I ask for?",
      answer:
        "Support is offered within our available resources. Requests are kept small so we can reach as many people as possible when we’re able.",
    },
    {
      question: "How can I give?",
      answer:
        "One Heart Society exists because of your support, and we are deeply grateful. Use the “I Want to Help” form or “Join the Circle” section to share how you’d like to contribute. Every act of giving fuels moments of real care, connection, and encouragement.",
    },
    {
      question: "How is the money used?",
      answer:
        "Your support helps us meet delicate and time-sensitive needs with care, nurture emotional well-being, and helps keep One Heart Society alive and thriving from the heart.",
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
        <Button variant="outline" asChild>
          <Link to="/faqs">More FAQs</Link>
        </Button>
      </div>
    </Container>
  );
};

export default FaqSec;
