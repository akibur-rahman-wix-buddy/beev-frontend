import { BackIcon, EyeOffIcon, EyeOnIcon } from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import React from "react";
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
  newPassword: z.string().min(1, "New password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
});

const ChangePasswordPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [showPassword3, setShowPassword3] = React.useState(false);

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

  return (
    <Container as="section" className="pt-8 pb-20">
      <div className="flex">
        <Link to={-1} className="">
          <div className="bg-[#F3EDE5] size-14 flex justify-center items-center rounded-lg">
            <BackIcon />
          </div>
        </Link>
      </div>
      <div className="border border-[#E4DDD2] p-12 rounded-lg space-y-10 mt-10">
        <h2 className="text-[26px] font-semibold mb-8">Change Password</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Old Password"
                          className="bg-[#F3EDE5] px-6 py-4 h-[60px] rounded-[10px] !text-base border-0"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOnIcon /> : <EyeOffIcon />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword2 ? "text" : "password"}
                          placeholder="New Password"
                          className="bg-[#F3EDE5] px-6 py-4 h-[60px] rounded-[10px] !text-base border-0"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
                        onClick={() => setShowPassword2((prev) => !prev)}
                      >
                        {showPassword2 ? <EyeOnIcon /> : <EyeOffIcon />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword3 ? "text" : "password"}
                          placeholder="Confirm Password"
                          className="bg-[#F3EDE5] px-6 py-4 h-[60px] rounded-[10px] !text-base border-0"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
                        onClick={() => setShowPassword3((prev) => !prev)}
                      >
                        {showPassword3 ? <EyeOnIcon /> : <EyeOffIcon />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="">
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
