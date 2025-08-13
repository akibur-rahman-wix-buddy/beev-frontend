import { BackIcon } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import SpaceSustainableSec from "@/sections/impact-of-support/SpaceSustainableSec";
import SupportFlowsSec from "@/sections/impact-of-support/SupportFlowsSec";
import TheImpactOfYourSupportSec from "@/sections/impact-of-support/TheImpactOfYourSupportSec";
import { Link } from "react-router";

const ImpactOfYourSupportPage = () => {
  return (
    <section className="pt-5">
      <Container>
        <div className="flex">
          <Link to="/want-to-help" className="">
            <div className="bg-[#F3EDE5] size-14 flex justify-center items-center rounded-lg">
              <BackIcon />
            </div>
          </Link>
        </div>
      </Container>
      <TheImpactOfYourSupportSec className="mt-10 mb-20" />
      <SupportFlowsSec className="my-20" />
      <SpaceSustainableSec className="my-20" />
    </section>
  );
};

export default ImpactOfYourSupportPage;
