"use client";

import Link from "next/link";
import React, { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Checkbox from "@/components/form/input/Checkbox";
import Button from "@/components/ui/button/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "@/validations/schema";
import { z } from "zod";


type LoginFormData = z.infer<typeof loginSchemas.login>;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchemas.login),
    });

    //submit
    const onSubmit = async (data: LoginFormData) => {
        console.log("Login Data:", data);

        await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API
    };

    return (
        <div className="flex flex-col flex-1 lg:w-1/2 w-full">
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm">
                            Sign In
                        </h1>
                        <p className="text-sm text-gray-500">
                            Enter your email and password to sign in!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-5">

                            {/* Email */}
                            <div>
                                <Label>Email *</Label>
                                <Input
                                    type="email"
                                    placeholder="info@gmail.com"
                                    {...register("email")}
                                    error={!!errors.email}
                                    hint={errors.email?.message}
                                />
                            </div>

                            {/*  Password */}
                            <div>
                                <Label>Password *</Label>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        {...register("password")}
                                        error={!!errors.password}
                                        hint={errors.password?.message}
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-3 cursor-pointer"
                                    >
                                        {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                    </span>
                                </div>
                            </div>

                            {/*  Remember */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                                    <span className="text-sm text-gray-600">
                                        Keep me logged in
                                    </span>
                                </div>

                                <Link href="/reset-password" className="text-sm text-blue-500">
                                    Forgot password?
                                </Link>
                            </div>

                            {/*  Button */}
                            <Button type="submit" className="w-full" size="sm" loading={isSubmitting}>
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <div className="mt-5 text-sm text-center">
                        Don’t have an account?{" "}
                        <Link href="/signup" className="text-blue-500">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;