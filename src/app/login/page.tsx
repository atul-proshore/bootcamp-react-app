"use client";
import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
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
    <div className="flex h-screen flex-col  items-center md:flex-row">
      <div className=" w-full h-1/2 md:w-1/2 md:h-full relative flex items-center justify-center">
        <img
          src="/screenshot.png"
          alt="De Heus"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative z-10 text-white text-center px-10">
          <h1 className="text-5xl font-bold mb-4">De Heus</h1>
          <h2 className="text-lg font-medium mb-4 hidden md:block">
            Poultry Farming Excellence
          </h2>
          <p className="text-sm leading-relaxed hidden md:block">
            Leading the industry with innovative nutrition solutions <br />
            for poultry farmers worldwide.
          </p>
        </div>
      </div>
      <div className=" w-[90%] md:w-1/2 flex justify-center items-center bg-white">
        <CardComp className="flex flex-col gap-6 p-6 w-full max-w-sm lg:max-w-md relative -mt-[25vh] md:mt-0 z-20 bg-white backdrop-blur-sm rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-2xl text-[#006FB7] ">
                Welcome Back!
              </p>
              <p className="text-[#1E1E1E]">Sign in to your account</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <InputGroupComp
                label="Email"
                placeholder="Enter your email"
                validationMessage={errors.email?.message}
                {...register("email")}
                type="email"
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

            <div className="flex justify-between items-center gap-2 ">
              <div className="flex justify-center items-center gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  {...register("rememberMe")}
                />
                <label htmlFor="remember-me" className=" text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div>
                {" "}
                <a
                  href="/forgotPassword"
                  className="text-[#006FB7] text-sm font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="">
              <ButtonComp
                className="w-full"
                name="Sign In"
                btnColor="green"
                type="submit"
              />
            </div>
            <div className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <a
                href="/register"
                className="text-[#006FB7] font-medium hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </CardComp>
      </div>
    </div>
  );
}
