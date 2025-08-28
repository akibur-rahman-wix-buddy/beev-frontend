import Container from "@/components/shared/Container";
import React from "react";
import { Link } from "react-router";

const TermsConditionsPage = () => {
  return (
    <Container
      as="section"
      className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 space-y-4 sm:space-y-6 lg:space-y-8"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold">
        Terms & Conditions
      </h1>
      <div className="text-[15px] sm:text-base lg:text-lg space-y-6 sm:space-y-9 lg:space-y-12">
        <div className="space-y-6">
          <p>Effective Date: May 1, 2025</p>
          <p>
            By using One Heart Society - whether requesting help, offering
            support, or participating in our Telegram space or One Heart
            Sanctuary - you agree to the following:
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            1. Voluntary Participation
          </p>
          <p>
            All participation is voluntary. Whether you're sharing a need or
            offering support, or participating in One Heart Sanctuary you do so
            at your own discretion.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            2. No Guaranteed Support
          </p>
          <div className="space-y-3 sm:space-y-4">
            <p>
              While we hold every request with deep care, we cannot promise
              support, responses, or outcomes. We are not able to guarantee help
              for every single request or any one request in particular. All
              submissions are reviewed as time, resources, and capacity allow.
            </p>
            <ul className="list-disc pl-4.5 space-y-1 sm:space-y-1.5">
              <li>
                All submissions are treated with sensitivity and compassion.
              </li>
              <li>
                Supporters may remain anonymous unless they choose to be named.
              </li>
              <li>
                We may gently edit submissions for clarity or length before
                considering it for the featured needs section.
              </li>
              <li>
                By submitting a request, you agree that it may be shared
                anonymously on The Heart Wall, featured needs section or in
                community spaces (like Instagram), unless you ask us not to.
              </li>
            </ul>
          </div>
          <p>
            You can review, update, or remove your request anytime by emailing:
            <br />
            <Link
              to="mailto:info@oneheartsociety.org"
              className="text-primary font-medium"
            >
              info@oneheartsociety.org
            </Link>
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            3. Participation & AI Use
          </p>
          <div className="space-y-3 sm:space-y-4">
            <p>
              Participation in the telegram space One Heart Sanctuary is always
              your choice.
            </p>
            <ul className="list-disc pl-4.5 space-y-1 sm:space-y-1.5">
              <li>
                You’re welcome to engage with any features that feel supportive
                to you - including, but not limited to, the One Heart Companion
                AI.
              </li>
              <li>
                The AI Companion is simply one of several tools to offer comfort
                and support, and using it is entirely up to you.
              </li>
              <li>
                Whether you explore many features or just one, your presence is
                always welcome.
              </li>
              <li>
                All conversations with the AI Companion are private,
                unmonitored, and never stored by One Heart Society. The AI is
                powered by OpenAI, which may process your messages to generate
                responses.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            4. Platform Fees
          </p>
          <ul className="list-disc pl-4.5 space-y-3 sm:space-y-4">
            <li>
              <b>30% of monthly support</b> keeps One Heart Society running and
              may also be used to meet urgent or sensitive needs of support
              seekers that cannot be shared publicly.
            </li>
            <li>
              <b>18% of one-time support</b> is used for processing and
              operational support.
            </li>
          </ul>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            5. Recurring Financial Support & Refunds
          </p>
          <p>
            You may cancel your monthly financial support at any time. However,
            contributions that have already been processed are non-refundable.
            We deeply value all contributions and use it with intention and
            integrity to serve those in need.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            6. No Professional Services
          </p>
          <p>
            One Heart Society is not a substitute for licensed therapy, medical
            care, or emergency services.
            <br />
            If you are in crisis, please contact a local emergency line or
            hotline.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            7. Intellectual Property
          </p>
          <p>
            All content, writing, logos, and visuals shared by One Heart Society
            are the property of the organization and may not be copied,
            modified, or redistributed without written consent.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            8. Limitation of Liability
          </p>
          <p>
            You agree not to hold One Heart Society, One Heart Sanctuary, its
            founder, team, or affiliates responsible for any personal,
            emotional, or financial outcomes resulting from use of our services.
          </p>
          <ul className="list-disc pl-4.5 space-y-1 sm:space-y-1.5">
            <li>
              You assume full responsibility for your decisions, participation,
              and experiences.
            </li>
            <li>
              We exist to offer compassionate support, not professional
              services.
            </li>
            <li>
              We aim to hold space with kindness and compassion, but never to
              diagnose, treat, or fix.
            </li>
          </ul>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            9. Updates
          </p>
          <p>
            We reserve the right to update or modify these Terms & Conditions at
            any time. Continued use of the platform after changes constitutes
            acceptance of the updated terms.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
            10. Not a Nonprofit Organization or Charity
          </p>
          <p>
            One Heart Society is a heart-led, impact-driven platform created to
            respond timely and compassionately to real human needs. We’ve chosen
            not to register as a nonprofit or charity so we can remain flexible,
            responsive, and free from the delays and restrictions that can limit
            how and when support is given.
          </p>
          <p>
            Because of this structure, contributions are considered voluntary
            gifts and are not tax-deductible. While we are not able to provide
            tax receipts, we are deeply committed to transparency and ensuring
            all support is used with care, integrity, and direct impact.
          </p>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
          Questions or concerns?
        </p>
        <p className="text-base sm:text-lg lg:text-xl font-semibold">
          Reach out anytime:{" "}
          <Link
            to="mailto:info@oneheartsociety.org"
            className="text-primary hover:underline cursor-pointer"
          >
            info@oneheartsociety.org
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default TermsConditionsPage;
