import ProfileForm from "@/components/profile/ProfileForm";
import Container from "@/components/shared/Container";
import React from "react";

const ProfilePage = () => {
  return (
    <Container as="section" className="pt-8 pb-20">
      <h1 className="text-[40px] font-semibold mb-8">Profile</h1>
      <div className="bg-[#F3EDE5] py-12 px-16 rounded-lg">
        <ProfileForm />
      </div>
    </Container>
  );
};

export default ProfilePage;
