import { z } from "zod";

export const fields = {
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .max(254, "Email is too long")
        .email("Enter a valid email address"),

    password: z
        .string()
        .min(1, "Password is required"),

    firstName: z
        .string()
        .min(1, "First name is required")
        .max(50),

    lastName: z
        .string()
        .min(1, "Last name is required")
        .max(50),

    confirmPassword: z.string(),

    terms: z
        .boolean()
        .refine((val) => val === true, {
            message: "You must accept terms",
        }),
};