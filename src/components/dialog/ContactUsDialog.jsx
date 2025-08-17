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
        className="border-0 rounded-4xl w-full !max-w-[800px]"
      >
        <DialogHeader>
          <DialogDescription
            className={
              "flex flex-col items-center gap-6 text-center p-12 text-lg font-medium"
            }
          >
            <HeartIcon />
            <p>
              Thank you for contacting One Heart Society. We appreciate you
              taking the time to reach out. Our team will respond as soon as
              we're able.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link to="/">Go Home</Link>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsDialog;
