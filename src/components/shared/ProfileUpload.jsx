import { cn } from "@/lib/utils";
import { forwardRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

const ProfileUpload = forwardRef(({ setValue, value, disabled }, ref) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setValue(acceptedFiles[0] || null);
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    disabled,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
    },
  });

  const renderImage = () => {
    if (typeof value === "string") {
      return (
        <Avatar className="size-full">
          <AvatarImage src={value} alt="user image" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      );
    }
    if (value instanceof File) {
      return (
        <img
          src={URL.createObjectURL(value)}
          className="size-full object-cover"
          alt="user image"
        />
      );
    }
    return (
      <div className="absolute left-1/2 top-1/2 inline-flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary">
        <Pencil className="size-[50%]" />
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className={cn(
        "group relative size-28 md:size-[136px] lg:size-40 cursor-pointer overflow-hidden rounded-full border",
        isDragActive && "border-sky-500 bg-sky-800"
      )}
      {...getRootProps()}
    >
      {renderImage()}
      {value && <AvatarDeleteBtn setValue={setValue} disabled={disabled} />}
      <input {...getInputProps()} />
    </div>
  );
});
ProfileUpload.displayName = "ProfileUpload";

const AvatarDeleteBtn = ({ setValue, disabled }) => (
  <>
    <div className="absolute inset-0 bg-secondary opacity-0 duration-200 group-hover:opacity-40"></div>
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setValue(null);
        }}
        disabled={disabled}
        className="inline-flex size-8 items-center justify-center rounded-full bg-destructive opacity-0 duration-200 group-hover:opacity-100"
        type="button"
      >
        <Trash2 className="size-[50%]" />
      </button>
    </div>
  </>
);

export default ProfileUpload;
