import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";
import homeBanner from "@/assets/images/home-banner.png";

const BannerSec = () => {
  return (
    <section className="relative pt-52 pb-44">
      <Container className="text-center flex flex-col items-center justify-center gap-4.5 sm:gap-6 xl:gap-8 text-white relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] lg:leading-[140%] font-bold max-w-[600px] xl:max-w-[900px]">
          When Life <span className="text-primary">Feels Heavy</span> We Hold
          You Here
        </h1>
        <div className="sm:text-lg xl:text-xl max-w-[1050px] space-y-4 sm:space-y-5 xl:space-y-6">
          <p>
            <span className="text-2xl font-bold">One Heart Society</span> is a
            soft-landing place for those who carry real needs but don't know how
            to ask for help. For those who don’t want to be publicly exposed in
            their tender moments.
          </p>
          <p className="max-w-[850px] mx-auto">
            Whether your need is emotional or financial in nature, this is a
            gentle space where compassion leads and care is offered with
            dignity.
          </p>
          <p>
            It’s a place where generosity is an act of solidarity and no one
            carries their burdens alone.
          </p>
        </div>
        <div className="sm:text-lg xl:text-xl gap-6 flex flex-col items-center">
          <p>Here, support isn’t loud. It’s soft. It’s kind. It’s real.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Button className="py-4 px-10" variant="secondary" asChild>
              <Link to="/have-a-need">I Have a Need</Link>
            </Button>
            <Button className="py-4 px-10" asChild>
              <Link to="/want-to-help">I Want to Help</Link>
            </Button>
          </div>
        </div>
      </Container>
      <figure className="absolute inset-0">
        <img
          src={homeBanner}
          alt="Banner Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="overlay absolute inset-0 bg-black opacity-60"></div>
      </figure>
    </section>
  );
};

export default BannerSec;
