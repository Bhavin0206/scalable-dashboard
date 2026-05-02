import { z } from "zod";
import { fields } from "./fields";

export const loginSchemas = {
    login: z.object({
        email: fields.email,
        password: fields.password,
    }),

    register: z
        .object({
            firstName: fields.firstName,
            lastName: fields.lastName,
            email: fields.email,
            password: fields.password,
            confirmPassword: z
                .string()
                .min(1, "Confirm password is required"),
            terms: fields.terms,
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        })
};