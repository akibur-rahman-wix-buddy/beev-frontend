import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import helpingHandImg from "@/assets/images/helping-hand.png";
import { cn } from "@/lib/utils";

const HelpingHandSec = ({ className }) => {
  return (
    <section className={cn("py-20 relative", className)}>
      <Container className="flex items-center gap-16 relative z-10">
        <figure className="flex-[45%] rounded-xl overflow-hidden">
          <img
            src={helpingHandImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="flex-[55%] text-lg">
          <SectionTitle className="mb-9">
            The Helping Hands Behind the Scenes
          </SectionTitle>
          <div className="space-y-10">
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
        <div className="left flex-[calc(50%-350px)] bg-[#F3EDE5] rounded-r-2xl"></div>
        <div className="right flex-[calc(50%+350px)]"></div>
      </div>
    </section>
  );
};

export default HelpingHandSec;
