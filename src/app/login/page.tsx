"use client";
import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
import { Checkbox } from "@/components/shadcnUI/checkbox";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type ILoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data: ILoginFormData) => {
    console.log("Remember me ticked?", data.rememberMe);
    console.log(
      "rememberedEmail in localStorage:",
      localStorage.getItem("rememberedEmail")
    );
    console.log(data);
    // persist or remove remembered email based on checkbox
    if (data.rememberMe) {
      if (data.email) localStorage.setItem("rememberedEmail", data.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("rememberMe", true);
    } else {
      setValue("email", "");
      setValue("rememberMe", false);
    }
  }, []);
  return (
    <CardComp className="flex flex-col gap-6 p-6 w-full max-w-sm lg:max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold text-2xl text-[#006FB7] ">
            Welcome Back!
          </p>
          <p className="text-[#1E1E1E]">Sign in to your account</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <InputGroupComp
            label="Username"
            placeholder="Enter your Username"
            validationMessage={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="string"
            className="w-full"
            wrapperClassName="w-full max-w-sm"
          />
          <InputGroupComp
            label="Password"
            placeholder="Enter Password"
            validationMessage={errors.password?.message}
            type={showPassword ? "text" : "password"}
            endContent={
              showPassword ? (
                <EyeOff className="w-4 h-4 cursor-pointer" />
              ) : (
                <Eye className="w-4 h-4 cursor-pointer" />
              )
            }
            onClick={() => setShowPassword(!showPassword)}
            className="w-full"
            wrapperClassName="w-full max-w-sm"
            {...register("password")}
          />
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <input id="remember-me" type="checkbox" {...register("rememberMe")} />
          <label htmlFor="remember-me" className=" text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <div className="flex justify-center">
          <ButtonComp name="Sign In" disabled={false} btnColor="green" />
        </div>
      </form>
    </CardComp>
  );
}
