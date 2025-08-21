import { HeartIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";

const HaveNeedDialogEmotional = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="border-0 rounded-3xl w-full !max-w-[800px] bg-[#F9F5F0]"
      >
        <DialogHeader>
          <DialogDescription
            className={
              "flex flex-col items-center gap-6 text-center p-12 text-lg"
            }
          >
            <HeartIcon />
            <div className="space-y-2">
              <p>Thank you for sharing what’s on your heart.</p>
              <p>Your request has been received with compassion.</p>
              <p>
                When support is possible, it may come through kind words,
                check-ins, or resources shared via <span className="font-semibold">One Heart Sanctuary.</span>
              </p>
              <p>You’re not alone here.</p>
            </div>
            <div className="pt-4">
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

export default HaveNeedDialogEmotional;
