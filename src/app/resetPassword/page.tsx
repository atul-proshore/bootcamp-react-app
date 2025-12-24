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

export default function ResetPassword() {
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
    console.log("New password has been submitted:\n", data);
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
            <div className="text-center mb-3">
              <h2
                aria-label="Set New Password"
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#006FB7]"
              >
                Set New Password
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 sm:gap-3"
            >
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
                name="Submit"
                type={ButtonTypes.submit}
                btnColor="green"
                className="w-full mt-4"
              />
            </form>
          </CardComp>
        </div>
      </div>
    </div>
  );
}
