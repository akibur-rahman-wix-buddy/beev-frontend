import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import SectionTitle from "@/components/shared/SectionTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import TextInput from "@/components/custom/TextInput";
import PasswordInput from "@/components/custom/PasswordInput";
import { Link } from "react-router";
import { GoogleIcon } from "@/assets/icons/icons";

const formSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirm_password: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const ResetPasswordPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <main className="bg-[#F9F5F0] text-textPrimary">
      <Container className="">
        <header className="relative">
          <nav className="absolute top-8 left-0">
            <Logo className="h-[70px]" />
          </nav>
        </header>
        <section className="min-h-screen flex flex-col justify-center text-center gap-8 max-w-[500px] mx-auto py-10">
          <div className="">
            <SectionTitle className="mb-0">Reset your password</SectionTitle>
            <h2 className="text-[#707070] text-lg mt-2 max-w-[80%] mx-auto">
              Please enter your new password to continue.
            </h2>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput title="Password" className="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput
                        title="Confirm Password"
                        className=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Confirm Password
              </Button>
            </form>
          </Form>
        </section>
      </Container>
    </main>
  );
};

export default ResetPasswordPage;
