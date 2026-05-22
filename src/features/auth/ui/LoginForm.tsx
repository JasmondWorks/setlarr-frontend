"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/shared/ui/base/InputField";
import { Button } from "@/shared/ui/base/Button";
import Link from "next/link";
import { loginSchema, type LoginSchema } from "../model/schemas";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
    // Connect to API
  };

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white rounded-xl shadow-[0_24px_60px_rgba(30,20,60,0.08),0_8px_16px_rgba(30,20,60,0.04)] border border-neutral-100 p-8 md:p-10 relative z-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 via-warning-500 to-success-500 rounded-b-full"></div>

      <h1 className="text-[26px] font-semibold text-neutral-900 tracking-[-0.4px] leading-[1.2] text-center">
        Welcome back
      </h1>
      <p className="mt-2 text-[14px] text-neutral-500 text-center mb-8">
        Sign in to your account
      </p>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="identifier"
          label="Email or phone"
          placeholder="you@example.com or +234 801 234 5678"
          icon={<span className="text-[14px] text-neutral-400 font-medium">@</span>}
          iconPosition="left"
          errorMessage={errors.identifier?.message}
          {...register("identifier")}
        />

        <div className="flex flex-col gap-2">
          <InputField
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
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
          <div className="text-right">
            <Link href="#" className="text-[12px] font-medium text-primary-600 hover:underline">Forgot password?</Link>
          </div>
        </div>

        <Button variant="primary" className="w-full mt-2" type="submit" disabled={isSubmitting}>
          Sign in
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
      </form>
      <div className="mt-8 text-center text-[13px] text-neutral-500">
        Don't have an account? <Link href="/register" className="text-primary-600 font-medium hover:underline">Sign up</Link>
      </div>
    </div>
  );
}
