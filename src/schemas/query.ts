import { z } from "zod";

export const querySchema = z.object({
    email: z.string()
        .email({message: "Email format is wrong"}),
    content: z.string()
        .min(5, { message: "Query should be of atleast 5 characters" })
        .max(500, { message: "Query should not be more than 500 characters" }),
    name: z.string()
        .min(1, { message: "Name should be given" }),
})