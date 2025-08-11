import React from "react";
import Container from "./Container";
import BreadcrumbTransparent from "./BreadcrumbTransparent";
import { Section } from "lucide-react";
import SectionTitle from "./SectionTitle";

const PrimaryBanner = ({ bgImg, breadcrumbs, title, subTitle }) => {
  return (
    <div className="text-white relative">
      <Container as="section" className="relative z-10">
        <div className="relative py-32">
          <BreadcrumbTransparent
            breadcrumbs={breadcrumbs}
            className="absolute top-10 left-0"
          />
          <SectionTitle
            className="space-y-4 mb-0"
            description={subTitle}
            center
          >
            {title}
          </SectionTitle>
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
