import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "Name is required").max(20, "Name is too long"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Name is too long"),
  bio: z.string().min(1, "Bio is required").max(300, "Bio is too long"),
  location: z
    .string()
    .min(1, "Location is required")
    .max(30, "Location is too long"),
});

export type UserType = z.infer<typeof userSchema>;
