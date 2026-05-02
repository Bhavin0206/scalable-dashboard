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
        .min(1, "Password is required")
};