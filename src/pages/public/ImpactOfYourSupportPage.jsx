import { BackIcon } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import SpaceSustainableSec from "@/sections/impact-of-support/SpaceSustainableSec";
import SupportFlowsSec from "@/sections/impact-of-support/SupportFlowsSec";
import TheImpactOfYourSupportSec from "@/sections/impact-of-support/TheImpactOfYourSupportSec";
import { Link } from "react-router";

const ImpactOfYourSupportPage = () => {
  return (
    <section className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8">
      <Container>
        <div className="flex">
          <Link to="/want-to-help" className="">
            <div className="bg-[#F3EDE5] size-10 sm:size-12 xl:size-14 flex justify-center items-center rounded-md sm:rounded-lg hover:bg-[#E8DFD4] transition-colors">
              <BackIcon className="size-7 sm:size-9 xl:size-11" />
            </div>
          </Link>
        </div>
      </Container>
      <TheImpactOfYourSupportSec className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20" />
      <SupportFlowsSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
      <SpaceSustainableSec className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20" />
    </section>
  );
};

export default ImpactOfYourSupportPage;
