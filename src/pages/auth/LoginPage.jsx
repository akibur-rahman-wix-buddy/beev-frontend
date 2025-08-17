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
    <main className="bg-[#F9F5F0] text-textPrimary">
      <Container className="">
        <header className="relative">
          <nav className="absolute top-8 left-0">
            <Logo className="h-[70px]" />
          </nav>
        </header>
        <section className="min-h-screen flex flex-col justify-center text-center gap-8 max-w-[500px] mx-auto py-10">
          <div className="">
            <SectionTitle className="mb-0">Welcome Back</SectionTitle>
            <h2 className="text-[#707070] text-lg mt-2">
              Please login to continue to your account.
            </h2>
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
                      <FormItem className="flex items-center gap-2 space-y-0">
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
                    className="text-primary font-medium"
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
              <div className="bg-[#E3DCD5] p-4 h-[60px] rounded-[10px] flex items-center justify-center gap-3 cursor-pointer text-lg font-medium">
                <GoogleIcon />
                <p>Start with Google</p>
              </div>
            </form>
          </Form>
          <p className="text-[17px] font-medium text-[#727272]">
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
