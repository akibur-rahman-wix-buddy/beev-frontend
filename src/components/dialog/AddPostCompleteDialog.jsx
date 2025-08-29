import { HeartIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";

const AddPostCompleteDialog = ({ open, onOpenChange }) => {
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
              Thank you for submitting your post to One Heart Society. Our team
              will review it shortly to ensure it aligns with our community
              guidelines. Once approved, it will be published and visible to
              others. We appreciate your contribution and look forward to
              sharing your voice with the community.
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

export default AddPostCompleteDialog;
