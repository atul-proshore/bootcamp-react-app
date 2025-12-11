"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
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
        console.log("REGISTER DATA:", data);
    };

    return (
        <div className="flex h-screen">
        <div className="w-1/2 h-full relative flex items-center justify-center">
            <img
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

        <div className="w-1/2 flex justify-center items-center bg-white">
            <CardComp className="p-6 shadow-lg rounded-lg w-[420px]">
            <h2 className="text-2xl font-bold">Create Account</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 mt-4"
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
                />
                <input type="hidden" {...register("fullName")} />
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
                />
                <input type="hidden" {...register("username")} />
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
                />
                <input type="hidden" {...register("email")} />
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
                    <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer"
                    >
                        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </div>
                    }
                />
                <input type="hidden" {...register("password")} />
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
                    <div
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
                    </div>
                    }
                />
                <input type="hidden" {...register("confirmPassword")} />
                </div>

                <ButtonComp
                name="Register"
                type={ButtonTypes.submit}
                btnColor="green"
                className="w-full mt-4"
                />

                <div className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <a
                    href="/login"
                    className="text-[#97BE0D] font-medium hover:underline"
                >
                    Login
                </a>
                </div>
            </form>
            </CardComp>
        </div>
        </div>
    );
}
