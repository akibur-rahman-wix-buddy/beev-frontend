import dummyProfileImg from "@/assets/images/dummy-profile.png";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ProfileUpload from "../shared/ProfileUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MAX_PROFILE_IMAGE_SIZE } from "@/lib/staticData";

const formSchema = z.object({
  avatar: z
    .union([
      z.string("Please provide a valid image URL"),
      z.instanceof(File, { message: "Please upload a valid image file" }),
      z.null(),
    ])
    .refine((value) => value !== null, { message: "Image is required" })
    .refine(
      (value) => {
        if (value instanceof File) {
          const validTypes = ["image/png", "image/jpg", "image/jpeg"];
          return validTypes.includes(value.type);
        }
        return true;
      },
      { message: "Only PNG, JPG, and JPEG files are allowed" }
    )
    .refine(
      (value) => {
        if (value instanceof File) {
          const maxSize = MAX_PROFILE_IMAGE_SIZE;
          return value.size <= maxSize;
        }
        return true;
      },
      { message: "File size must be less than 1MB" }
    ),

  name: z.string().min(1, "Name is required").min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email address")),
});

const ProfileForm = () => {
  const profileData = {};
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: profileData?.photo
        ? `${import.meta.env.VITE_URL}/${profileData.photo}`
        : dummyProfileImg,
      name: profileData?.name || "Sara Johnson",
      email: profileData?.email || "Sarajohnson@gmail.com",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormControl>
                    <ProfileUpload
                      setValue={field.onChange}
                      value={field.value}
                      setError={(errorMessage) => {
                        form.setError("avatar", errorMessage);
                      }}
                      // disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold">
                {profileData?.name || "Sara Johnson"}
              </h3>
              <p className="text-sm sm:text-base">
                {profileData?.email || "Sarajohnson@gmail.com"}
              </p>
            </div>
          </div>
          <div className="bg-[#FBF7F0] p-6 sm:p-8 lg:p-14 rounded-lg md:rounded-[10px] space-y-6 sm:space-y-8 lg:space-y-12">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F3EDE5] px-4 py-3 sm:px-6 sm:py-4 h-12 sm:h-[60px] rounded-[10px] !text-sm sm:!text-base border-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[17px] sm:text-lg font-medium inline">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F3EDE5] px-4 py-3 sm:px-6 sm:py-4 h-12 sm:h-[60px] rounded-[10px] !text-sm sm:!text-base border-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center sm:justify-end">
            <Button type="submit" className="w-full sm:w-auto">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
