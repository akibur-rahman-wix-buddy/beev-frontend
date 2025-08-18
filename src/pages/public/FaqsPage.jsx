import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import React, { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const FaqsPage = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = useMemo(
    () => [
      {
        question: "What is One Heart Society?",
        answer:
          "One Heart Society is a heart-led membership community and digital wellness platform. We provide emotional support tools, guided practices, and safe spaces for healing and reflection. Our core membership, One Heart Sanctuary, offers subscribers access to our Al support companion, healing prompts, and self-care resources. We also host 'I Have a Need', a free community feature where anyone can share requests for care, and the Society responds with compassion, understanding, and support.",
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
      {
        question: "How are payments sent?",
        answer:
          "Payments are sent directly from One Heart Society to the person receiving support using secure methods such as PayPal and Cash App.",
      },
      {
        question: "How do I know this is real?",
        answer:
          "Every request is privately reviewed before being shared and considered for support. All support is coordinated directly through One Heart Society. We never post fabricated or unverified needs.",
      },
      {
        question: "I received support. Do I need to pay it back?",
        answer:
          "No. Support offered through One Heart Society is completely yours to keep, and you do not need to pay it back. However, if you’re ever in a position to give back, we’d love for you to consider doing so through the I Want to Help form or by Joining The Circle. This way, together, we can keep the circle of care alive and always ready to give to those in need.",
      },
      {
        question: "Can I choose who to support?",
        answer:
          "No. All contributions are pooled so we can respond to needs as they arise, ensuring fairness and timeliness.",
      },
      {
        question: "Is my contribution tax deductible?",
        answer:
          "No. One Heart Society is not a charity or nonprofit organization. All contributions are considered voluntary gifts and are not tax deductible.",
      },
      {
        question: "What if I need more help than you can give?",
        answer:
          "While we can’t guarantee support nor promise to always meet every need completely when we do offer support; we try our best to offer what we can and surround you with care through One Heart Sanctuary.",
      },
      {
        question: "Can I remain anonymous?",
        answer:
          "Yes. Whether through The Heart Wall or our secure forms, you can choose not to have your name or details displayed publicly.",
      },
      {
        question: "How is this different from GoFundMe?",
        answer:
          "We don’t run campaigns, hold public fundraisers, or ask anyone to prove their worth. Unlike GoFundMe and other similar platforms, we do not allow large financial requests. Our support is meant for smaller, immediate needs that can make a real difference in the moment. As requests come in, we review them and may share them anonymously. Support is given directly through One Heart Society, as resources allow, and never from one individual directly to another.",
      },
      {
        question: "How often can someone ask for help?",
        answer:
          "We limit frequency to ensure fairness to others and to allow support and attention to flow where it's needed most.",
      },
      {
        question: "What if someone lies or abuses the system?",
        answer:
          "We review every single request and may occasionally require additional information from our support seekers to ensure integrity and clarity. It is our top priority to offer care with discretion and dignity; misuse will result in removal from the platform.",
      },
      {
        question: "What types of needs qualify?",
        answer:
          'Small but meaningful financial, emotional, or thoughtful needs that can be met within our available resources. For more information, please see "what are these needs exactly?" under the I Have a Need form.',
      },
      {
        question: "What do you not cover?",
        answer:
          "We can’t cover large debts, ongoing bills, business investments/loans or any unsafe or illegal activities.",
      },
      {
        question: "What does “emotional support” mean to One Heart Society?",
        answer:
          "A safe and caring space through our One Heart Sanctuary, AI Companion, and community, where you can share, reflect, and feel supported.",
      },
      {
        question: "Can I offer gift cards instead of money?",
        answer:
          "Yes. We gladly accept digital gift cards as another way to support the work of One Heart Society. They are used where most helpful to further our mission and respond to needs.",
      },
      {
        question: "Is this religious?",
        answer: "No. We welcome people of all backgrounds and beliefs.",
      },
      {
        question: "What if I accidentally submitted the wrong information?",
        answer:
          "Let us know right away so we can correct it before processing.",
      },
      {
        question: "What happens if a request isn’t funded?",
        answer:
          "While we cannot promise nor guarantee help to any individual(s). We’ll do our best to offer partial help or revisit it when resources become available.",
      },
      {
        question: "Is this for emergencies?",
        answer:
          "No. We try to respond as quickly as time and resources allow, but we cannot guarantee instant emergency support.",
      },
      {
        question: "Can I give without creating an account?",
        answer: "Yes. One-time contributions can be made without signing up.",
      },
      {
        question:
          "What if I want to help someone privately through your system?",
        answer:
          "We’re not able to arrange private, person-to-person support. All contributions are received by One Heart Society and distributed at our discretion, so we can respond fairly and with care to needs as they arise.",
      },
      {
        question: "What if I’m unsure whether my need is “big enough”?",
        answer:
          "If it matters to you, it matters to us. Share it, and we’ll let you know if we can help.",
      },
      {
        question: "How are needs shared with supporters?",
        answer:
          "Some needs are featured on The Heart Wall to honor the spirit of support, maintain transparency, and show how care flows through the community. Others are handled quietly to protect security and privacy, at the request of the person seeking support.",
      },
      {
        question: "Why not show all the requests?",
        answer:
          "We protect privacy and dignity by only sharing some needs publicly.",
      },
      {
        question:
          "Why doesn’t 100% of my contribution go directly to the need?",
        answer:
          'A portion covers processing fees and platform upkeep, as well as the time and dedication it takes to review, coordinate, and fulfill requests. We also maintain an overflow fund to help ensure support can remain steady and available as needs arise. For more information, please see "learn more about the impact of your support" under the I Want to Help form.',
      },
      {
        question: "Can I cancel my monthly contribution?",
        answer:
          "Yes. You can cancel anytime through your account settings. Please note that any processed monthly support is non-refundable. We’re deeply grateful for the time you’ve chosen to be part of this circle of care.",
      },
      {
        question: "Can I give in someone else’s honor?",
        answer:
          'Yes. You’re welcome to make your support in honor of a loved one, a special date, or a meaningful cause. We will try our best to honor it on The Heart Wall under Reflections. Leave a short description under "What inspires you to give?" on the I Want to Help form.',
      },
      {
        question: "Can I support without offering money?",
        answer:
          "Absolutely. Support can look like sharing One Heart Society with others, posting encouragement or positive words on The Heart Wall, or contacting us with ways you’d like to contribute your time or resources. All forms of care are welcome here and are deeply appreciated.",
      },
    ],
    []
  );

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) {
      return faqData;
    }

    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, faqData]);

  return (
    <Container className={cn("", className)}>
      <div className="flex flex-col items-center">
        <SectionTitle className="my-6" center>
          Frequently Asked Questions
        </SectionTitle>
        <Input
          placeholder="Search FAQ's"
          className="w-full max-w-[950px] px-8 py-5 bg-[#F3EDE5] rounded-full h-auto !text-base mb-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">
              No FAQs found matching your search.
            </p>
          </div>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-5 mb-20"
            defaultValue="item-1"
          >
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Container>
  );
};

export default FaqsPage;
