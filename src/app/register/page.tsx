"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
import { registerSchema } from "../utils/utils";

enum ButtonTypes {
  submit = "submit",
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log("REGISTER DATA :", data);
  };

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 block lg:hidden">
        <Image
          src="/screenshot.png"
          alt="De Heus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <div className="relative hidden lg:flex w-1/2 items-center justify-center">
          <Image
            src="/screenshot.png"
            alt="De Heus"
            fill
            priority
            className="object-cover"
          />
          <div className="relative z-10 text-white text-center px-10">
            <h1 className="text-5xl font-bold mb-4">De Heus</h1>
            <h2 className="text-lg font-medium mb-4">
              Poultry Farming Excellence
            </h2>
            <p className="text-sm leading-relaxed">
              Leading the industry with innovative nutrition solutions <br />
              for poultry farmers worldwide.
            </p>
          </div>
        </div>

        {/* mobile */}
        <div className="flex flex-1 items-center justify-center px-4 py-10">
          <CardComp className="w-full max-w-md p-6 sm:p-8 shadow-xl rounded-xl bg-white/95 backdrop-blur">
            <div className="text-center mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006FB7]">
                Register New Account
              </h2>
              <p className="text-xs sm:text-sm text-[#1E1E1E]">
                Join our De Heus community!
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 sm:gap-3"
            >
              <div
                onInputCapture={(e: any) =>
                  setValue("fullName", e.target.value, { shouldValidate: true })
                }
              >
                <InputGroupComp
                  type="text"
                  label="Full Name"
                  placeholder="Enter your full name"
                  validationMessage={errors.fullName?.message}
                  {...register("fullName")}
                />
              </div>

              <div
                onInputCapture={(e: any) =>
                  setValue("username", e.target.value, { shouldValidate: true })
                }
              >
                <InputGroupComp
                  type="text"
                  label="Username"
                  placeholder="Enter username"
                  validationMessage={errors.username?.message}
                  {...register("username")}
                />
              </div>

              <div
                onInputCapture={(e: any) =>
                  setValue("email", e.target.value, { shouldValidate: true })
                }
              >
                <InputGroupComp
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  validationMessage={errors.email?.message}
                  {...register("email")}
                />
              </div>

              <div
                onInputCapture={(e: any) =>
                  setValue("password", e.target.value, { shouldValidate: true })
                }
              >
                <InputGroupComp
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="Enter password"
                  validationMessage={errors.password?.message}
                  endContent={
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                    >
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </span>
                  }
                  {...register("password")}
                />
              </div>

              <div
                onInputCapture={(e: any) =>
                  setValue("confirmPassword", e.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                <InputGroupComp
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  placeholder="Confirm password"
                  validationMessage={errors.confirmPassword?.message}
                  endContent={
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </span>
                  }
                  {...register("confirmPassword")}
                />
              </div>

              <ButtonComp
                name="Register"
                type={ButtonTypes.submit}
                btnColor="green"
                className="w-full mt-4"
              />

              <p className="text-xs sm:text-sm text-center mt-4">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[#006FB7] font-medium hover:underline"
                >
                  Login
                </a>
              </p>
            </form>
          </CardComp>
        </div>
      </div>
    </div>
  );
}
