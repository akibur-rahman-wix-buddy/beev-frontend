import React from "react";
import Container from "./Container";
import BreadcrumbTransparent from "./BreadcrumbTransparent";
import { Section } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";

const PrimaryBanner = ({
  bgImg,
  breadcrumbs,
  title,
  subTitle,
  onLeft,
  maxWidth = "",
}) => {
  return (
    <div className="text-white relative">
      <Container as="section" className="relative z-10">
        <div className="relative">
          <BreadcrumbTransparent
            breadcrumbs={breadcrumbs}
            className="absolute top-5 sm:top-8 lg:top-10 left-0"
          />
          <div
            className={cn(
              "min-h-[350px] lg:min-h-[360px] xl:min-h-[400px] flex items-center",
              onLeft && "max-w-[700px]"
            )}
          >
            <SectionTitle
              className={cn(
                "space-y-4 !mb-0 py-20 sm:py-28 lg:py-32 xl:py-36",
                {
                  "text-left": onLeft,
                  "text-center max-w-[950px] mx-auto": !onLeft,
                },
                maxWidth
              )}
              description={subTitle}
              center={!onLeft}
            >
              {title}
            </SectionTitle>
          </div>
        </div>
      </Container>
      <figure className="absolute inset-0 overflow-hidden">
        <img
          src={bgImg}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="overlay absolute inset-0 bg-black opacity-60"></div>
      </figure>
    </div>
  );
};

export default PrimaryBanner;
