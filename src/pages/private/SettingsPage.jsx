import { ForwardIcon2 } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import React from "react";
import { Link } from "react-router";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <Container as="section" className="pt-8 pb-20">
      <h1 className="text-[40px] font-semibold mb-8">Settings</h1>
      <div className="border border-[#E4DDD2] p-12 rounded-lg space-y-10">
        <div className="">
          <h2 className="text-[26px] font-semibold mb-4">
            Personal Preferences
          </h2>
          <div className="space-y-5">
            <Link
              to="/profile"
              className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-8 py-6"
            >
              Edit Profile
              <ForwardIcon2 className="" />
            </Link>
            <Link
              to="/profile/change-password"
              className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-8 py-6"
            >
              Change Password
              <ForwardIcon2 className="" />
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-[26px] font-semibold mb-4">
            Notification Settings
          </h2>
          <div className="space-y-5">
            <div className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-8 py-6">
              Receive email when someone responds to your post
              <Switch className="scale-160 origin-right cursor-pointer" />
            </div>
            <div className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-8 py-6">
              Receive email when someone posts on The Heart Wall
              <Switch className="scale-160 origin-right cursor-pointer" />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="text-destructive cursor-pointer text-lg"
        >
          Delete Account
        </button>
      </div>
    </Container>
  );
};

export default SettingsPage;
