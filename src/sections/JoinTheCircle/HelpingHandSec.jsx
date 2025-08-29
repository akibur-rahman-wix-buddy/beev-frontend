import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import helpingHandImg from "@/assets/images/helping-hand.png";
import { cn } from "@/lib/utils";

const HelpingHandSec = ({ className }) => {
  return (
    <section className={cn("xl:py-16 relative", className)}>
      <Container className="flex flex-col lg:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-10 xl:gap-16 relative z-10">
        <figure className="lg:flex-[50%] xl:flex-[45%] max-w-[400px] md:max-w-full rounded-xl overflow-hidden lg:py-10 xl:py-0">
          <img
            src={helpingHandImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="lg:flex-[50%] xl:flex-[55%] text-[15px] sm:text-base xl:text-lg sm:text-center lg:text-left">
          <SectionTitle className="!mb-3 lg:!mb-6 xl:!mb-9 sm:text-center sm:mx-auto lg:text-left lg:mx-0">
            The Helping Hands Behind the Scenes
          </SectionTitle>
          <div className="space-y-3 lg:space-y-4 xl:space-y-10">
            <p>
              This movement is held up by real humans doing quiet, daily labor:
              writing, designing, responding, creating healing content, building
              this platform, and nurturing its growth.
            </p>
            <p>
              Think of your contribution as a thread. Alone, it’s small, but
              woven together with others, it becomes a net that can hold someone
              safely. We don’t expect one seed to grow a forest. But we do
              believe in the power of a shared harvest - and perhaps one day,
              the giver will become the one in need. When that time comes, this
              circle will still be here, ready to hold them too.
            </p>
            <p>
              Your support helps keep this heart-led work alive and sustainable.
            </p>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 flex">
        <div className="left flex-[calc(50%-350px)] "></div>
        <div className="right flex-[calc(50%+350px)]"></div>
      </div>
      <div className="absolute inset-0 hidden lg:flex">
        <div className="left flex-[calc(50%-250px)] xl:flex-[calc(50%-420px)] bg-[#F3EDE5] rounded-r-2xl"></div>
        <div className="right flex-[calc(50%+250px)] xl:flex-[calc(50%+420px)]"></div>
      </div>
    </section>
  );
};

export default HelpingHandSec;
