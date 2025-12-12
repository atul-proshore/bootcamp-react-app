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
        });

    const onSubmit = (data: any) => {
        console.log("RESET PASSWORD DATA:", data);
    }
    return (
        <div className="flex h-screen">
            {/* Left side - Image */}
            <div className="w-1/2 h-full relative flex items-center justify-center">
                <Image
                src="/screenshot.png"
                alt="De Heus"
                className="absolute w-full h-full object-cover"
                />

                <div className="relative z-10 text-white text-center px-10">
                    <h1 className="text-5xl font-bold mb-4">De Heus</h1>
                    <h2 className="text-lg font-medium mb-4">Poultry Farming Excellence</h2>
                    <p className="text-sm leading-relaxed">
                        Leading the industry with innovative nutrition solutions <br />
                        for poultry farmers worldwide.
                    </p>
                </div>
            </div>
            {/* Right side - Reset Password Form */}
            <div className="w-1/2 flex justify-center items-center bg-white">
                <CardComp className="p-6 shadow-lg rounded-lg w-[420px]">
                    <div className="text-center">
                        <h2 className="text-3xl mb-2" style={{ color: '#006FB7' }}>Forgot Password?</h2>
                        <p className="text-gray-600">No worries, we&apos;ll send you reset instructions</p>
                    </div>
                    <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
                        <div
                            onInputCapture={(e: any) => setValue("email", e.target.value, { shouldValidate: true })}
                        >
                            <InputGroupComp
                                type="text"
                                label="Email"
                                placeholder="your@email.com"
                                validationMessage={errors.email?.message}
                            />
                            <input type="hidden" {...register("email")} />
                        </div>
                        <ButtonComp
                            name="Reset Password"
                            type={ButtonTypes.submit}
                            btnColor="green"
                            className="w-full mt-4"
                        />

                        <div className="text-center mt-4 text-sm">
                            Back to {" "}
                            <a
                                href="/login"
                                className="text-[#97BE0D] font-medium hover:underline"
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