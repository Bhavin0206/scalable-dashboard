import { z } from "zod";
import { fields } from "./fields";

export const loginSchemas = {
    login: z.object({
        email: fields.email,
        password: fields.password,
    }),
};