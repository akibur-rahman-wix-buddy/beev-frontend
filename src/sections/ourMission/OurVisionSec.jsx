import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const OurVisionSec = ({ className }) => {
  return (
    <section className={cn("", className)}>
      <Container as="section" className="text-center">
        <SectionTitle>Our Vision</SectionTitle>
        <div className="text-xl">
          <h2 className="mb-5">
            We imagine a world where no one suffers silently. A world where
            emotional and financial needs are both honored with tenderness.
            Where care is offered without ego, expectation, or shame. Where
            kindness shines through dark moments, and people feel a little more
            valued by one another.
          </h2>
          <div className="space-y-1 mb-8">
            <p>
              We are building that world through quiet care and meaningful
              connection.
            </p>
            <p>
              Because any one of us, at any time, may find ourselves in need.
            </p>
            <p>And when that moment comes, this circle will still be here.</p>
            <p className="font-semibold">
              To hold you, just as you once held someone else.
            </p>
          </div>
          <div className="space-y-1 text-primary w-fit mx-auto">
            <p>Step Inside the Sanctuary</p>
            <p>If You’re in Need, This Space Is for You</p>
            <p>Give with Heart. <Link to="/join-the-circle" className="hover:underline">Join The Circle.</Link></p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurVisionSec;