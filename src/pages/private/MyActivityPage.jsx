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
    <Container as="section" className="pt-8 pb-20">
      <h1 className="text-[40px] font-semibold">My Activity</h1>
      <section className="pt-10 space-y-10 pb-20">
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
