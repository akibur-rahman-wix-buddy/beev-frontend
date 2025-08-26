import { CorrectBigIcon, HeartIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";
import SectionTitle from "../shared/SectionTitle";

const RegistrationSuccessDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="border-0 rounded-xl sm:rounded-2xl xl:rounded-3xl w-full !max-w-[95vw] sm:!max-w-[90vw] lg:!max-w-[800px] bg-[#F9F5F0]"
      >
        <DialogHeader>
          <DialogDescription
            className={
              "flex flex-col items-center gap-4 sm:gap-6 text-center sm:p-8 md:p-12 text-sm sm:text-base md:text-lg"
            }
          >
            <CorrectBigIcon className="size-16 sm:size-20  md:size-24 lg:w-auto lg:h-auto" />
            <SectionTitle className="text-textPrimary !mb-0 text-xl sm:text-2xl md:text-3xl">
              Registration Successful
            </SectionTitle>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-none sm:max-w-md md:max-w-lg">
              You've entered a space of care, connection, and dignity. Whether
              you're here to give, receive, or simply witness. Welcome to the
              One Heart Society.
            </p>
            <div className="pt-2 sm:pt-4 w-full sm:w-auto">
              <Button
                asChild
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link to="/">Go to Homepage</Link>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationSuccessDialog;
