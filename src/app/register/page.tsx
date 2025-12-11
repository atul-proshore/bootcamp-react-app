"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputComp from "@/components/reusableComponents/InputComp";

enum ButtonTypes {
    submit = "submit",
    reset = "reset",
    button = "button",
}

const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(6, "Must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
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

    const fullNameRef = useRef<HTMLDivElement>(null);
    const usernameRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);
    const confirmPasswordRef = useRef<HTMLDivElement>(null);

    const bindInput = (
        ref: any,
        field: "fullName" | "username" | "email" | "password" | "confirmPassword"
    ) => {
        const input = ref?.current?.querySelector("input");
        if (!input) return;

        input.addEventListener("input", (e: any) => {
        setValue(field, e.target.value, { shouldValidate: true });
        });
    };

    useEffect(() => {
        bindInput(fullNameRef, "fullName");
        bindInput(usernameRef, "username");
        bindInput(emailRef, "email");
        bindInput(passwordRef, "password");
        bindInput(confirmPasswordRef, "confirmPassword");
    }, []);

    const onSubmit = (formData: any) => {
        console.log("REGISTER DATA:", formData);
    };

    return (
        <div className="flex h-screen">
        <style>
            {`
            .password-mask {
                -webkit-text-security: disc;
                text-security: disc;
            }
            `}
        </style>

        <div className="w-1/2 h-full relative flex items-center justify-center">
    
    <img
        src="/screenshot.png"
        alt="De Heus Background"
        className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="relative z-10 text-white text-center px-10">
        <h1 className="text-4xl font-bold mb-4">De Heus</h1>
        <h2 className="text-lg font-medium mb-4">Poultry Farming Excellence</h2>

        <p className="text-sm leading-relaxed">
        Leading the industry with innovative nutrition solutions<br />
        for poultry farmers worldwide.
        </p>
    </div>

    </div>


        <div className="w-1/2 flex justify-center items-center bg-white">
            <CardComp className="p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-1">Create Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <div ref={fullNameRef}>
                <InputComp
                    label="Full Name"
                    placeholder="Enter your full name"
                    validationMessage={errors.fullName?.message}
                />
                </div>
                <input type="hidden" {...register("fullName")} value={watch("fullName") || ""} readOnly />

                <div ref={usernameRef}>
                <InputComp
                    label="Username"
                    placeholder="Enter username"
                    validationMessage={errors.username?.message}
                />
                </div>
                <input type="hidden" {...register("username")} value={watch("username") || ""} readOnly />

                <div ref={emailRef}>
                <InputComp
                    label="Email"
                    placeholder="Enter email"
                    validationMessage={errors.email?.message}
                />
                </div>
                <input type="hidden" {...register("email")} value={watch("email") || ""} readOnly />

                <div ref={passwordRef}>
                <InputComp
                    label="Password"
                    placeholder="Enter password"
                    className="password-mask"
                    validationMessage={errors.password?.message}
                />
                </div>
                <input type="hidden" {...register("password")} value={watch("password") || ""} readOnly />

                <div ref={confirmPasswordRef}>
                <InputComp
                    label="Confirm Password"
                    placeholder="Confirm password"
                    className="password-mask"
                    validationMessage={errors.confirmPassword?.message}
                />
                </div>
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
            </form>
            </CardComp>
        </div>
        </div>
    );
}
