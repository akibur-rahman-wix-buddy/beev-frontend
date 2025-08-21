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
        className="border-0 rounded-2xl w-full !max-w-[800px] bg-[#F9F5F0]"
      >
        <DialogHeader>
          <DialogDescription
            className={
              "flex flex-col items-center gap-6 text-center p-12 text-lg"
            }
          >
            <CorrectBigIcon />
            <SectionTitle className="text-textPrimary mb-0">
              Registration Successful
            </SectionTitle>
            <p>
              You’ve entered a space of care, connection, and dignity. Whether
              you’re here to give, receive, or simply witness. Welcome to the
              One Heart Society.
            </p>
            <div className="pt-4">
              <Button asChild>
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
