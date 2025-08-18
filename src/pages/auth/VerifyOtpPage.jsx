import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React, { useState } from "react";
import { Link } from "react-router";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useStateContext } from "@/hooks/useStateContext";

const VerifyOtpPage = () => {
  const [value, setValue] = useState("");
  const { email } = useStateContext();
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
            <SectionTitle className="mb-0">Verify</SectionTitle>
            <h2 className="text-[#707070] text-lg mt-2">
              Enter the verification code we just sent to {email}.
            </h2>
          </div>
          <div className="w-full space-y-4 sm:space-y-6">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={value}
              onChange={(value) => setValue(value)}
              className=""
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={4} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </div>
          <p className="text-[17px] font-medium text-[#727272]">
            Didn’t receive code?{" "}
            <button
              type="button"
              className="text-primary hover:underline cursor-pointer"
            >
              Resend
            </button>
          </p>
        </section>
      </Container>
    </main>
  );
};

export default VerifyOtpPage;
