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
        "One Heart Society is a kindness-based care circle where people can ask for help with small but meaningful needs and where others give from the heart. It’s a space rooted in dignity, honesty, and connection ran by real people who care.",
    },
    {
      question: "Who can ask for help?",
      answer:
        "Anyone in need can ask for help. Our community is open to all individuals seeking support, regardless of their background or circumstances.",
    },
    {
      question: "How do I ask for help?",
      answer:
        "To ask for help, simply reach out to our community through our website or social media channels. You can describe your needs, and our members will respond with support and resources.",
    },
    {
      question: "How much help can I ask for?",
      answer:
        "There is no set limit to the help you can ask for. We encourage you to reach out with any needs, big or small, and our community will do its best to support you.",
    },
    {
      question: "How can I give?",
      answer:
        "You can give by donating resources, time, or skills to those in need within our community. Whether it’s providing financial support, volunteering your time, or sharing your expertise, every contribution makes a difference.",
    },
    {
      question: "How is the money used?",
      answer:
        "Donations to One Heart Society are used directly to support individuals in need within our community. This includes funding for essential resources, services, and initiatives that promote kindness and connection.",
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
