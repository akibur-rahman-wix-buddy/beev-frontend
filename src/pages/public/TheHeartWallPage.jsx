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
    <Container as="section" className="pt-8">
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "The Heart Wall", url: "#" },
        ]}
      />
      <section className="pt-10 space-y-14 pb-20">
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
