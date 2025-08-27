import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const DeleteAccountDialog = ({
  open,
  onOpenChange,
  onConfirmDelete,
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
            <div className="size-14 sm:size-16 lg:size-20 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="size-8 sm:size-10 lg:size-12 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-600">
                Delete Account
              </h3>
              <p className="text-gray-700">
                Are you sure you want to delete your account?
              </p>
              <p className="text-gray-600">
                This action will permanently remove all your data, including:
              </p>
              <ul className=" text-gray-600 space-y-1 text-sm sm:text-base">
                <li>Your profile information</li>
                <li>Your transaction history</li>
                <li>Stop your monthly contribution</li>
              </ul>
              <p className="font-semibold text-red-600 pt-2">
                This action cannot be undone.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:pt-4 w-full sm:w-auto">
              <Button
                variant="outline"
                className="rounded-full px-6 sm:px-16 order-2 sm:order-1"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                className="rounded-full px-6 sm:px-8 bg-red-600 hover:bg-red-700 order-1 sm:order-2"
                onClick={onConfirmDelete}
              >
                <svg
                  className="size-4 sm:size-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span className="whitespace-nowrap">
                  Yes, Delete Account
                </span>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountDialog;
