import { HeartIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";

const IWantToHelpDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="border-0 rounded-3xl w-full !max-w-[800px] bg-[#F9F5F0]"
      >
        <DialogHeader>
          <DialogDescription
            className={
              "flex flex-col items-center gap-4 text-center py-8 px-12 text-lg"
            }
          >
            <HeartIcon />
            <div className="">
              <p>Thank you for showing up with your heart.</p>
              <p>
                Your support is already at work, helping meet a real need and
                quietly holding someone in a way that truly matters.
              </p>
            </div>
            <div className="">
              <p>
                Whether your offering brings a meal, a tool of comfort, or a
                moment of relief, it’s part of something sacred. You didn’t just
                give.
              </p>
              <p>You reminded someone they’re not alone.</p>
            </div>
            <p>
              If you'd like to stay connected or support again in the future,
              we’re always here.
            </p>
            <div className="">
              <p>With love,</p>
              <p className="font-semibold">One Heart Society</p>
            </div>
            <div className="">
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

export default IWantToHelpDialog;
