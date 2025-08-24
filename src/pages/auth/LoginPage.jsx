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
import { Checkbox } from "@/components/ui/checkbox";
import { GoogleIcon } from "@/assets/icons/icons";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email address")),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  keepme: z.boolean().optional(),
});

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      keepme: false,
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <main className="bg-[#F9F5F0] text-textPrimary relative">
      <Container className="">
        <header className="relative">
          <nav className="absolute top-4 md:top-8 left-0">
            <Logo className="h-14 md:h-16 lg:h-[70px]" />
          </nav>
        </header>
        <section className="min-h-screen flex flex-col justify-center text-center gap-5 sm:gap-6 lg:gap-8 max-w-[500px] mx-auto py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
          <div className="">
            <SectionTitle
              className="!mb-0"
              description="Please login to continue to your account."
              center
            >
              Welcome Back
            </SectionTitle>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput title="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PasswordInput
                          title="Password"
                          className=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="keepme"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-1 md:gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="cursor-pointer border-[#707070] border-2 rounded"
                          />
                        </FormControl>
                        <FormLabel className="text-[#707070] cursor-pointer">
                          Keep me logged in
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Link
                    to="/forgot-password"
                    className="text-primary font-medium text-sm sm:text-base"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
              <div className="flex items-center gap-3">
                <hr className="border-t border-[#E9E0D7] flex-1" />
                <p className="text-[#6E6E6E] font-medium pb-1">or</p>
                <hr className="border-t border-[#E9E0D7] flex-1" />
              </div>
              <div className="bg-[#E3DCD5] p-4 h-11 sm:h-[50px] md:h-[54px] lg:h-[60px] sm:text-[17px] lg:text-lg rounded-md flex items-center justify-center gap-3 cursor-pointer font-medium">
                <GoogleIcon className="size-5 md:size-6" />
                <p>Start with Google</p>
              </div>
            </form>
          </Form>
          <p className="text-[15px] md:text-[17px] font-medium text-[#727272]">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Sign up for free
            </Link>
          </p>
        </section>
      </Container>
    </main>
  );
};

export default LoginPage;
