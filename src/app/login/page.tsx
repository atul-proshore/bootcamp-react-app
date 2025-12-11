import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputComp from "@/components/reusableComponents/InputComp";
import { Button } from "@/components/shadcnUI/button";
import { Checkbox } from "@/components/shadcnUI/checkbox";

export default function Login() {
  return (
    <CardComp className="flex flex-col gap-6 p-6">
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-2xl text-[#006FB7] ">Welcome Back!</p>
        <p className="text-[#1E1E1E]">Sign in to your account</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center m-4">
        <InputComp
          label="Username"
          placeholder="Enter your Username"
          // validationMessage="Email is required"
          className="w-full"
          wrapperClassName="w-full max-w-sm"
        />
        <InputComp
          label="Password"
          placeholder="Enter Password"
          // validationMessage="Password is required"
          className="w-full"
          wrapperClassName="w-full max-w-sm"
        />
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <Checkbox id="remember-me" />
        <label htmlFor="remember-me" className=" text-sm text-gray-600">
          Remember me
        </label>
      </div>
      <div className="flex justify-center">
        <ButtonComp name="Sign In" disabled={false} btnColor="green" />
      </div>
    </CardComp>
  );
}
