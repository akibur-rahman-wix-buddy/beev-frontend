import { HeartIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";

const ContactUsDialog = ({ open, onOpenChange }) => {
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
            <HeartIcon className="size-14 sm:size-16 lg:size-auto" />
            <p>
              Thank you for contacting One Heart Society. We appreciate you
              taking the time to reach out. Our team will respond as soon as
              we're able.
            </p>
            <div className="lg:pt-4">
              <Button className="rounded-full px-20" asChild>
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsDialog;
