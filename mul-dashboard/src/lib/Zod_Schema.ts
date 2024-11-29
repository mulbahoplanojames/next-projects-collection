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

export const coursesSchema = z.object({
  course_title: z
    .string()
    .min(8, "Course Title must be at least 6 characters long"),
  course_image: z.instanceof(File, { message: "Please select a course image" }),
  course_code: z
    .string()
    .min(3, "Course Code must be at least 3 characters long"),
  professor: z.string().min(3, "Professor must be at least 3 characters long"),
  duration: z.string().min(6, "Duration must be at least 6 characters long"),
  number_of_students: z.string(),
  course_price: z
    .string()
    .min(3, "Course Price must be at least 3 characters long"),
});

export const departmentsSchema = z.object({
  department_name: z
    .string()
    .min(3, "Department Name must be at least 3 characters long"),
  head_of_department: z
    .string()
    .min(3, "Head of Department must be at least 3 characters long"),
  established_year: z
    .string()
    .min(3, "Established Year must be at least 3 characters long"),
  student_capacity: z
    .string()
    .min(3, "Student Capacity must be at least 3 characters long"),
  details: z.string().min(5, "Details must be at least 5 characters long"),
});
