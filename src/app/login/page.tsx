"use client";
import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
import { Checkbox } from "@/components/shadcnUI/checkbox";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";

type ILoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: ILoginFormData) => {
    console.log("Remember me ticked?", data.rememberMe);
    if (data.rememberMe) {
      localStorage.setItem("rememberedEmail", data.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    console.log(
      "rememberedEmail in localStorage:",
      localStorage.getItem("rememberedEmail")
    );
    console.log(data);
  };
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
            {...register("email")}
            type="string"
            className="w-full"
            wrapperClassName="w-full max-w-sm"
          />
          <InputGroupComp
            label="Password"
            placeholder="Enter Password"
            validationMessage={errors.password?.message}
            type="string"
            className="w-full"
            wrapperClassName="w-full max-w-sm"
            {...register("password")}
          />
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <input type="checkbox" {...register("rememberMe")} />
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
