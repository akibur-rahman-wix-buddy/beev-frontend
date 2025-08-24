import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useStateContext } from "@/hooks/useStateContext";

const VerifyOtpPage = () => {
  const [value, setValue] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const { email } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    setIsBtnDisabled(value.length !== 6);
  }, [value]);

  const handleSubmit = () => {
    if (value.length === 6) {
      navigate("/reset-password");
    }
  };

  return (
    <main className="bg-[#F9F5F0] text-textPrimary relative">
      <Container className="">
        <header className="relative">
          <nav className="absolute top-4 md:top-8 left-0">
            <Logo className="h-14 md:h-16 lg:h-[70px]" />
          </nav>
        </header>
        <section className="min-h-screen flex flex-col justify-center text-center gap-5 sm:gap-6 lg:gap-8 max-w-[500px] mx-auto py-24">
          <SectionTitle
            className="!mb-0"
            description={`Enter the verification code we just sent to ${email}.`}
            fromauth
            center
          >
            Verify
          </SectionTitle>
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
            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={isBtnDisabled}
            >
              Verify
            </Button>
          </div>
          <p className="text-[15px] md:text-[17px] font-medium text-[#727272]">
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
