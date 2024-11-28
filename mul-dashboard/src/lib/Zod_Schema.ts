import { z } from "zod";

export const addStudentSchema = z.object({
  first_name: z
    .string()
    .min(4, "First Name must be at least 3 characters long"),
  last_name: z.string().min(3, "Last Name must be at least 3 characters long"),
  roll_number: z
    .string()
    .min(8, "Roll Number must be at least 8 characters long"),
  email: z.string().email("Invalid email address"),
  registration_date: z.date().default(new Date()),
  gender: z.string(),
  class: z.string().min(3, "Class must be at least 3 characters long"),
  phone: z.string(),
  birth_date: z.date(),
  blood_group: z.string(),
  address: z.string(),
});
