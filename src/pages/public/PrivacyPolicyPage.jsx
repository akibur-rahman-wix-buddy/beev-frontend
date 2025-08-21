import Container from "@/components/shared/Container";
import React from "react";
import { Link } from "react-router";

const PrivacyPolicyPage = () => {
  return (
    <Container as="section" className="pt-8 pb-20">
      <h1 className="text-[40px] font-semibold mb-8">Privacy Policy</h1>
      <div className="text-lg space-y-10">
        <div className="space-y-6">
          <p>Effective Date: May 1, 2025</p>
          <p>
            At One Heart Society, your privacy is sacred. We’re committed to
            protecting your personal information with integrity, compassion, and
            care. This platform is intended for individuals 18 years or older.
            By using it, you affirm that you meet this requirement or have
            obtained proper consent.
          </p>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">1. Collection of Information</p>
          <div className="space-y-2">
            <p>
              We only collect the information necessary to support your
              experience on our platform, including:
            </p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Your name and email address</li>
              <li>Optional details about emotional or financial needs</li>
              <li>
                Information related to your giving preferences (amount,
                frequency, anonymity)
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">2. Use of Information</p>
          <div className="space-y-2">
            <p>We use your information only to:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>
                Help coordinate compassionate community engagement within the
                platform
              </li>
              <li>
                Connect you with emotional or practical resources, if you opt in
              </li>
              <li>
                Offer occasional updates about platform features or community
                impact
              </li>
            </ul>
          </div>
          <p>
            All support is voluntary and intended as part of a shared mutual
            care mission. No guarantees are made or implied about specific
            outcomes.
          </p>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">3. Financial Transactions</p>
          <div className="space-y-2">
            <p>
              We do not collect or store any credit or debit card details
              directly.
            </p>
            <p>
              If you choose to receive support via Cash App or PayPal, we will
              collect only the information needed to send funds (such as your
              Cash App handle or PayPal email). We do not have access to your
              full account information for these services.
            </p>
            <p>
              All credit or debit card payments are processed securely through
              Stripe, and all payments through Cash App and PayPal are handled
              on their respective platforms. Your financial details are
              protected according to each provider's encryption standards and
              privacy policies.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">4. Content Moderation Rights</p>
          <div className="space-y-2">
            <p>We reserve the right to remove or refuse submissions that:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Violate our values of compassion and dignity</li>
              <li>Appear fraudulent, harmful, or misleading</li>
              <li>Misuse the platform in any way</li>
            </ul>
          </div>
          <p>
            Our goal is to protect both support seekers and supporters with
            thoughtful, values-aligned moderation.
          </p>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">5. Cookies & Tracking</p>
          <p>
            We may use minimal cookies or analytics tools to help us improve
            your experience. These do not collect sensitive personal information
            and are used solely for functionality and basic insights.
          </p>
          <p>
            You may disable cookies through your browser settings at any time.
          </p>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">6. Your Rights</p>
          <p>
            You may request to review, update, or delete your information at any
            time by contacting us: <br />
            <Link
              to="mailto:info@oneheartsociety.org"
              className="text-primary font-medium"
            >
              info@oneheartsociety.org
            </Link>
          </p>
        </div>
        <div className="space-y-6">
          <p className="font-semibold text-2xl">7. Policy Updates</p>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Continued use of the platform after changes have been made
            constitutes acceptance of the updated terms.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
