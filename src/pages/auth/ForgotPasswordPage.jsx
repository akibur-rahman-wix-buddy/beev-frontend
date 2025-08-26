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
import { Link, useNavigate } from "react-router";
import { useStateContext } from "@/hooks/useStateContext";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email address")),
});

const ForgotPasswordPage = () => {
  const { setEmail } = useStateContext();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setEmail(values.email);
    navigate("/verify-otp");
  }

  return (
    <main className="bg-[#F9F5F0] text-textPrimary">
      <Container className="">
        <header className="relative">
          <nav className="absolute top-4 md:top-8 left-0">
            <Logo className="h-14 md:h-16 lg:h-[70px]" />
          </nav>
        </header>
        <section className="min-h-screen flex flex-col justify-center text-center gap-5 sm:gap-6 lg:gap-8 max-w-[500px] mx-auto py-24">
          <SectionTitle
            className="!mb-0"
            description="Enter your email and we’ll send you a reset link."
            fromauth
            center
          >
            Forgot Password?
          </SectionTitle>
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
              <Button type="submit" className="w-full">
                Reset password
              </Button>
            </form>
          </Form>
          <p className="text-[15px] md:text-[17px] font-medium text-[#727272]">
            Remember Password?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Return to login
            </Link>
          </p>
        </section>
      </Container>
    </main>
  );
};

export default ForgotPasswordPage;
