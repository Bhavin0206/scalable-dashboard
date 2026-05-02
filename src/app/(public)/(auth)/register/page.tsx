"use client";

import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "@/validations/schema";
import { z } from "zod";
import Button from "@/components/ui/button/Button";

type RegisterFormData = z.infer<typeof loginSchemas.register>;

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(loginSchemas.register),
    });

    const onSubmit = async (data: RegisterFormData) => {
        console.log("Register Data:", data);

        await new Promise((res) => setTimeout(res, 2000));
    };

    return (
        <div className="flex flex-col flex-1 lg:w-1/2 w-full">
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">

                <div className="mb-6">
                    <h1 className="text-xl font-semibold">Sign Up</h1>
                    <p className="text-sm text-gray-500">
                        Enter your email and password to sign up!
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">

                        {/* First + Last */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>
                                    First Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    {...register("firstName")}
                                    placeholder="Enter your first name"
                                    error={!!errors.firstName}
                                    hint={errors.firstName?.message}
                                />
                            </div>

                            <div>
                                <Label>
                                    Last Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    {...register("lastName")}
                                    placeholder="Enter your last name"
                                    error={!!errors.lastName}
                                    hint={errors.lastName?.message}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <Label>
                                Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                type="email"
                                {...register("email")}
                                placeholder="Enter your email"
                                error={!!errors.email}
                                hint={errors.email?.message}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <Label>
                                Password <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    placeholder="Enter your password"
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

                        {/* Confirm Password */}
                        <div>
                            <Label>
                                Confirm Password <span className="text-red-500">*</span>
                            </Label>

                            <div className="relative">
                                <Input
                                    type={showConfirmPassword  ? "text" : "password"}
                                    {...register("confirmPassword")}
                                    placeholder="Confirm password"
                                    error={!!errors.confirmPassword}
                                    hint={errors.confirmPassword?.message}
                                />

                                <span
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-3 cursor-pointer"
                                >
                                    {showConfirmPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </span>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-center gap-3">
                            <Checkbox {...register("terms")} />
                            <p className="text-sm text-gray-600">
                                I agree to Terms & Privacy Policy
                            </p>
                        </div>

                        {errors.terms && (
                            <p className="text-red-500 text-xs">
                                {errors.terms.message}
                            </p>
                        )}

                        {/* Button */}
                        <Button
                            type="submit"
                            className="w-full"
                            loading={isSubmitting}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>

                <div className="mt-5 text-sm text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}