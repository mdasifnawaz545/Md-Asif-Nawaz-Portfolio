import * as z from 'zod';

export const messageSchema=z.object({
    firstName: z.string().min(2, { message: "Must be at least 2 character" }),
    lastName: z.string().min(2, { message: "Must be at least 2 character" }),
    email: z.string().email({ message: 'Enter a valid Email address' }),
    message: z.string().min(2, { message: "Must be at least 2 character" })
})