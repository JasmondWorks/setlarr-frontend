"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/shared/ui/base/InputField";
import { Button } from "@/shared/ui/base/Button";
import { ShieldCheck } from "lucide-react";
import { registerSchema, type RegisterSchema } from "../model/schemas";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("Form data:", data);
    // TODO: Connect to API
  };

  return (
    <div className="w-full max-w-[420px] mx-auto mt-16 md:mt-24">
      <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-primary-600 mb-4 flex items-center gap-2">
        <span className="w-4 h-px bg-primary-600"></span> GET STARTED
      </div>
      <h1 className="text-[32px] font-semibold text-neutral-900 tracking-[-0.6px] leading-[1.2]">
        Create your account
      </h1>
      <p className="mt-3 text-[15px] text-neutral-600 mb-10">
        Start trading safely in minutes — no credit card required.
      </p>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="fullName"
            label="Full name"
            placeholder="Adaeze Okeke"
            errorMessage={errors.fullName?.message}
            {...register("fullName")}
          />
          <InputField
            id="phone"
            label="Phone number"
            placeholder="801 234 5678"
            errorMessage={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <InputField
          id="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          }
          iconPosition="left"
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <div className="flex flex-col gap-2">
          <InputField
            id="password"
            type="password"
            label="Password"
            placeholder="At least 8 characters"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            }
            iconPosition="left"
            errorMessage={errors.password?.message}
            {...register("password")}
          />
          {!errors.password && (
            <div className="flex items-center gap-[6px] mt-1 text-[12px] text-neutral-500">
              <ShieldCheck className="w-[14px] h-[14px] text-success-500" />
              Stored with bank-grade encryption
            </div>
          )}
        </div>

        <Button variant="primary" className="w-full mt-2" type="submit" disabled={isSubmitting}>
          Create account
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-neutral-200"></div>
          <span className="shrink-0 px-4 text-neutral-400 text-[12px]">or</span>
          <div className="flex-grow border-t border-neutral-200"></div>
        </div>

        <Button variant="outline" className="w-full gap-3 font-semibold text-neutral-700" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </Button>

        <div className="mt-8 text-center text-[12px] text-neutral-500 max-w-[280px] mx-auto leading-relaxed">
          By signing up you agree to our <a href="#" className="text-primary-600 hover:underline">Terms</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
        </div>
      </form>
    </div>
  );
}
