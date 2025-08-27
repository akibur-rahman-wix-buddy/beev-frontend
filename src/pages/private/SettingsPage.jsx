import { ForwardIcon2 } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import React, { useState } from "react";
import { Link } from "react-router";
import { Switch } from "@/components/ui/switch";
import DeleteAccountDialog from "@/components/dialog/DeleteAccountDialog";

const SettingsPage = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteAccount = () => {
    // TODO: Implement actual delete account logic
    console.log("Account deletion confirmed");
    setIsDeleteDialogOpen(false);
    // You can add navigation or API call here
  };

  return (
    <Container
      as="section"
      className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8">
        Settings
      </h1>
      <div className="border border-[#E4DDD2]  p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12 rounded-lg sm:rounded-[10px] space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold mb-3 sm:mb-4">
            Personal Preferences
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <Link
              to="/profile"
              className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base transition-colors hover:bg-[#E8DDD0]"
            >
              <span className="font-medium">Edit Profile</span>
              <ForwardIcon2 className="size-5 sm:size-7 flex-shrink-0" />
            </Link>
            <Link
              to="/profile/change-password"
              className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base transition-colors hover:bg-[#E8DDD0]"
            >
              <span className="font-medium">Change Password</span>
              <ForwardIcon2 className="size-5 sm:size-7 flex-shrink-0" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold mb-3 sm:mb-4">
            Notification Settings
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <div className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base">
              <span className="font-medium pr-2 sm:pr-4">
                Receive email when someone responds to your post
              </span>
              <Switch className="scale-110 sm:scale-125 md:scale-150 lg:scale-160 origin-right cursor-pointer flex-shrink-0" />
            </div>
            <div className="bg-[#F3EDE5] rounded-lg flex justify-between items-center px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base">
              <span className="font-medium pr-2 sm:pr-4">
                Receive email when someone posts on The Heart Wall
              </span>
              <Switch className="scale-110 sm:scale-125 md:scale-150 lg:scale-160 origin-right cursor-pointer flex-shrink-0" />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="text-destructive cursor-pointer text-base sm:text-lg font-medium transition-colors hover:text-red-700"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          Delete Account
        </button>
      </div>

      <DeleteAccountDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirmDelete={handleDeleteAccount}
      />
    </Container>
  );
};

export default SettingsPage;
