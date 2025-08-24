import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import founderImg from "@/assets/images/community.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const CommunitySec = ({ className }) => {
  return (
    <section className={cn("lg:py-16 xl:py-20 relative", className)}>
      <Container className="flex flex-col lg:flex-row lg:items-center gap-8 xl:gap-16 relative z-10">
        <div className="lg:flex-[55%] text-sm sm:text-[15px] xl:text-[17px]">
          <SectionTitle className="">
            The Heart of Our Community
          </SectionTitle>
          <p className="max-w-[550px] mb-4 sm:mb-6 lg:mb-8 xl:mb-12">
            Visit our Heart Wall to read real reflections from those moved to
            speak from the heart. Leave your own heartfelt comment if you feel
            called to share.
          </p>
          <Button
            asChild
            className="hover:bg-primary relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-right-2 hover:after:top-full hover:after:mt-2 hover:after:-translate-y-[70%] hover:after:h-6 hover:after:bg-[rgba(255,131,123,0.4)] hover:after:blur-[15px] hover:after:rounded-full hover:after:z-[-1] transition-all duration-300"
          >
            <Link to="/the-heart-wall">Explore The Heart Wall</Link>
          </Button>
        </div>
        <figure className="lg:flex-[45%] sm:aspect-video lg:aspect-auto rounded-xl overflow-hidden">
          <img
            src={founderImg}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </figure>
      </Container>
      <div className="absolute inset-0 hidden lg:flex">
        <div className="left flex-[calc(50%+260px)] xl:flex-[calc(50%+350px)]"></div>
        <div className="right flex-[calc(50%-260px)] xl:flex-[calc(50%-350px)] bg-[#F3EDE5] rounded-l-2xl"></div>
      </div>
    </section>
  );
};

export default CommunitySec;
