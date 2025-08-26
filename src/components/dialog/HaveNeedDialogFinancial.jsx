import { HeartIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";

const HaveNeedDialogFinancial = ({ open, onOpenChange }) => {
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
            <div className="">
              <p>Thank you for trusting us with your story.</p>
              <p>
                One Heart Society is still growing. While we can’t promise help
                for every request, each one is received with care. As support
                becomes available, we do our best to respond.
              </p>
            </div>
            <p>You are not alone. You are seen. You are safe here.</p>
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

export default HaveNeedDialogFinancial;
