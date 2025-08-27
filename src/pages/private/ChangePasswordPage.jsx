import { BackIcon, EyeOffIcon, EyeOnIcon } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import React, { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  oldPassword: z.string().min(1, "Old password is required"),
  newPassword: z
    .string()
    .min(1, "New password is required")
    .min(6, "New password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(1, "Confirm password is required")
    .min(6, "New password must be at least 6 characters"),
});

const ChangePasswordPage = () => {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const passwordFields = [
    { name: "oldPassword", key: "old", placeholder: "Old Password" },
    { name: "newPassword", key: "new", placeholder: "New Password" },
    {
      name: "confirmPassword",
      key: "confirm",
      placeholder: "Confirm Password",
    },
  ];

  return (
    <Container
      as="section"
      className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20"
    >
      <div className="flex">
        <Link to={-1} className="">
          <div className="bg-[#F3EDE5] size-10 sm:size-12 xl:size-14 flex justify-center items-center rounded-md sm:rounded-lg hover:bg-[#E8DFD4] transition-colors">
            <BackIcon className="size-7 sm:size-9 xl:size-11" />
          </div>
        </Link>
      </div>
      <div className="border border-[#E4DDD2] p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12 rounded-lg sm:rounded-[10px] space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10 mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10">
        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-semibold mb-5 sm:mb-6 lg:mb-8">Change Password</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6 lg:space-y-8">
            <div className="space-y-4 sm:space-y-5">
              {passwordFields.map(({ name, key, placeholder }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword[key] ? "text" : "password"}
                            placeholder={placeholder}
                            className="bg-[#F3EDE5] px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-[60px] rounded-lg md:rounded-[10px] !text-sm sm:!text-base border-0"
                            {...field}
                          />
                        </FormControl>
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
                          onClick={() => togglePassword(key)}
                        >
                          {showPassword[key] ? <EyeOnIcon className="size-5 sm:size-6" /> : <EyeOffIcon className="size-5 sm:size-6" />}
                        </button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-full sm:w-fit">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default ChangePasswordPage;
