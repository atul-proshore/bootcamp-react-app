"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Image from "next/image";

import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
import { resetPasswordSchema } from "../utils/utils";

enum ButtonTypes {
  submit = "submit",
}

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log("RESET PASSWORD DATA:", data);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 h-56 md:h-auto flex items-center justify-center">
        <Image
          src="/screenshot.png"
          alt="De Heus"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-white text-center px-6 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            De Heus
          </h1>
          <h2 className="text-sm md:text-lg font-medium mb-2 md:mb-4">
            Poultry Farming Excellence
          </h2>
          <p className="hidden md:block text-sm leading-relaxed">
            Leading the industry with innovative nutrition solutions <br />
            for poultry farmers worldwide.
          </p>
        </div>
      </div>

      {/* Right side - Reset Password Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white px-4 py-8">
        <CardComp className="p-6 shadow-lg rounded-lg w-full max-w-md">
          <div className="text-center">
            <h2 className="text-3xl mb-2" style={{ color: "#006FB7" }}>
              Forgot Password?
            </h2>
            <p className="text-gray-600">
              No worries, we&apos;ll send you reset instructions
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
              <InputGroupComp
                type="text"
                label="Email"
                placeholder="your@email.com"
                validationMessage={errors.email?.message}
                {...register("email")}
              />
            
            <ButtonComp
              name="Reset Password"
              type={ButtonTypes.submit}
              btnColor="green"
              className="w-full mt-2"
            />

            <div className="text-center mt-2 text-sm">
              Back to{" "}
              <a
                href="/login"
                className="text-[#006FB7] font-medium hover:underline"
              >
                Login?
              </a>
            </div>
          </form>
        </CardComp>
      </div>
    </div>
  );
}
