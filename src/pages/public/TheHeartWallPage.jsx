import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import TabsComponent from "@/components/shared/TabsComponent";
import FeaturedNeedsPosts from "@/components/theHeartWall/FeaturedNeedsPosts";
import ReflectionsPosts from "@/components/theHeartWall/ReflectionsPosts";
import React, { useState } from "react";

const TheHeartWallPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Reflections", "Featured Needs"];

  const handleTabChange = (index) => {
    console.log("Active tab:", tabs[index]);
    setActiveTab(index);
  };

  return (
    <Container as="section" className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "The Heart Wall", url: "#" },
        ]}
      />
      <section className="mt-4 sm:mt-6 lg:mt-8 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">
        <TabsComponent
          tabs={tabs}
          defaultTab={0}
          onTabChange={handleTabChange}
        />
        {activeTab === 0 && <ReflectionsPosts />}
        {activeTab === 1 && <FeaturedNeedsPosts />}
      </section>
    </Container>
  );
};

export default TheHeartWallPage;
