import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import SectionTitle from "../shared/SectionTitle";

const HeartWallGuideDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="border-0 rounded-xl sm:rounded-2xl xl:rounded-3xl w-full !max-w-[95vw] sm:!max-w-[90vw] lg:!max-w-[800px] bg-[#F9F5F0]"
      >
        <DialogHeader>
          <DialogDescription
            className={
              "flex flex-col items-center gap-6 py-4 sm:p-8 md:p-12 text-sm sm:text-base md:text-lg font-medium"
            }
          >
            <SectionTitle className="!mb-0 text-textPrimary">
              Heart Wall Guidelines
            </SectionTitle>
            <ul className="text-left list-disc text-primary pl-4.5 space-y-5">
              <li>
                Be kind -{" "}
                <span className="text-textPrimary">
                  This is a space for encouragement, gratitude, and reflections
                  that uplift others.
                </span>
              </li>
              <li>
                No financial details -{" "}
                <span className="text-textPrimary">
                  Please don’t post Cash App, PayPal, or other payment
                  information. Needs are not posted or fulfilled here.
                </span>
              </li>
              <li>
                Respect privacy -{" "}
                <span className="text-textPrimary">
                  Only share what you’re comfortable making public.
                </span>
              </li>
              <li>
                We may share your words -{" "}
                <span className="text-textPrimary">
                  Posts may be featured on our website or social media to
                  inspire and encourage others.
                </span>
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HeartWallGuideDialog;
