import DonationsSection from "@/components/myActivity/DonationsSection";
import MyPostsSection from "@/components/myActivity/MyPostsSection";
import Container from "@/components/shared/Container";
import TabsComponent from "@/components/shared/TabsComponent";
import React, { useState } from "react";

const MyActivityPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["My Posts", "Contributions"];

  const handleTabChange = (index) => {
    console.log("Active tab:", tabs[index]);
    setActiveTab(index);
  };

  return (
    <Container
      as="section"
      className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8">My Activity</h1>
      <section className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">
        <TabsComponent
          tabs={tabs}
          defaultTab={0}
          onTabChange={handleTabChange}
        />
        {activeTab === 0 && <MyPostsSection />}
        {activeTab === 1 && <DonationsSection />}
      </section>
    </Container>
  );
};

export default MyActivityPage;
