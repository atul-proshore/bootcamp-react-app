"use client";
import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
import { EyeIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex flex-col gap-6">
      <ButtonComp type={"submit"} name="This is a button" />
      <CardComp className="flex justify-center items-center">
        <p className="font-semibold ">This is header</p>
        This is card body
      </CardComp>
      {/* <InputComp
        className=""
        // label="label"
        placeholder="placeholder text"
        // validationMessage="this is validation text"
      />
      <InputComp
        className=""
        placeholder="placeholder text"
        validationMessage="this is validation text"
      /> */}
      <form onSubmit={handleSubmit((data) => console.log(data))}></form>
      <InputGroupComp
        {...register("name")}
        label="Password"
        startContent={<EyeIcon />}
        endContent={<EyeIcon />}
        type="password"
        borderColor="blue"
        placeholder="placeholder text"
        validationMessage="this is validation text"
      />
      <InputGroupComp
        type="text"
        borderColor="green"
        placeholder="placeholder text"
        validationMessage="this is validation text"
      />
    </div>
  );
}
