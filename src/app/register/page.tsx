"use client";
import { Eye, EyeOff } from "lucide-react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";

enum ButtonTypes {
    submit = "submit",
    }

const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required").matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Email must contain @ and . and be valid"),
    password: yup.string().min(8, "Must be at least 8 characters").required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("You need to confirm password"),

    });

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });


    const refs = {
        fullName: useRef<HTMLDivElement>(null),
        username: useRef<HTMLDivElement>(null),
        email: useRef<HTMLDivElement>(null),
        password: useRef<HTMLDivElement>(null),
        confirmPassword: useRef<HTMLDivElement>(null),
    };

    const sync = (ref: any, field: keyof typeof refs) => {
        const input = ref?.current?.querySelector("input");
        if (!input) return;

        input.addEventListener("input", (e: any) => {
        setValue(field, e.target.value, { shouldValidate: true });
        });
    };

    useEffect(() => {
        sync(refs.fullName, "fullName");
        sync(refs.username, "username");
        sync(refs.email, "email");
        sync(refs.password, "password");
        sync(refs.confirmPassword, "confirmPassword");
    }, []);

    const onSubmit = (data: any) => {
        console.log("REGISTER DATA:", data);
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="flex h-screen">
        <div className="w-1/2 h-full relative flex items-center justify-center">
            <img
            src="/screenshot.png"
            alt="De Heus"
            className="absolute inset-0 w-full h-full object-cover"
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
            <CardComp className="p-4 shadow-lg rounded-lg w-[420px]">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
                <div ref={refs.fullName}>
                <InputGroupComp
                    type="text"
                    label="Full Name"
                    placeholder="Enter your full name"
                    validationMessage={errors.fullName?.message}
                />
                </div>
                <input type="hidden" {...register("fullName")} value={watch("fullName") || ""} readOnly />

                <div ref={refs.username}>
                <InputGroupComp
                    type="text"
                    label="Username"
                    placeholder="Enter username"
                    validationMessage={errors.username?.message}
                />
                </div>
                <input type="hidden" {...register("username")} value={watch("username") || ""} readOnly />

                <div ref={refs.email}>
                <InputGroupComp
                    type="email"
                    label="Email"
                    placeholder="Enter email"
                    validationMessage={errors.email?.message}
                />
                </div>
                <input type="hidden" {...register("email")} value={watch("email") || ""} readOnly />

                <div ref={refs.password}>
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
                </div>

            <input
            type="hidden"
            {...register("password")}
            value={watch("password") || ""}
            />

            <div ref={refs.confirmPassword}>
            <InputGroupComp
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                placeholder="Confirm password"
                validationMessage={errors.confirmPassword?.message}
                endContent={
                <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="cursor-pointer"
                >
                    {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </div>
                }
            />
            </div>

                {/* <input
                type="hidden"
                {...register("confirmPassword")}
                value={watch("confirmPassword") || ""}
                /> */}

                <input
                type="hidden"
                {...register("confirmPassword")}
                value={watch("confirmPassword") || ""}
                readOnly
                />

                <ButtonComp
                name="Register"
                type={ButtonTypes.submit}
                btnColor="green"
                className="w-full mt-4"
                />

                <div className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#97BE0D] font-medium hover:underline">
                        Login
                    </a>
                </div>
            </form>
            </CardComp>
        </div>
        </div>
    );
}
