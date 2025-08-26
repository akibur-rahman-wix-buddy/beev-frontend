import { HeartIcon, TelegramIcon } from "@/assets/icons/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router";

const HaveNeedDialogEmotional = ({
  open,
  onOpenChange,
  interestedToJoin = false,
}) => {
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
            <div className="space-y-1 sm:space-y-2">
              <p>Thank you for sharing what’s on your heart.</p>
              <p>Your request has been received with compassion.</p>
              <p>
                When support is possible, it may come through kind words,
                check-ins, or resources shared via{" "}
                <span className="font-semibold">One Heart Sanctuary.</span>
              </p>
              <p>You’re not alone here.</p>
            </div>
            {interestedToJoin ? (
              <div className="flex flex-col gap-2 sm:gap-4 lg:pt-4">
                <Button className="rounded-full gap-2 sm:gap-4 px-4 sm:px-7 lg:px-8">
                  <TelegramIcon className="size-6 sm:size-7 lg:size-8 shrink-0" />
                  <span className="whitespace-nowrap text-[13px] sm:text-[17px] lg:text-lg">
                    Join the Sanctuary on Telegram
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-20"
                  asChild
                >
                  <Link to="/">Back to home</Link>
                </Button>
              </div>
            ) : (
              <div className="lg:pt-4">
                <Button className="rounded-full px-20" asChild>
                  <Link to="/">Back to home</Link>
                </Button>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HaveNeedDialogEmotional;
