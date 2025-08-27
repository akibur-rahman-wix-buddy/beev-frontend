import ProfileForm from "@/components/profile/ProfileForm";
import Container from "@/components/shared/Container";
import React from "react";

const ProfilePage = () => {
  return (
    <Container
      as="section"
      className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8">
        Profile
      </h1>
      <div className="bg-[#F3EDE5] py-6 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-16 rounded-lg md:rounded-[10px]">
        <ProfileForm />
      </div>
    </Container>
  );
};

export default ProfilePage;
