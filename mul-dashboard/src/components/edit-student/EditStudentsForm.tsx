"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardTitle } from "../ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudentSchema } from "@/lib/Zod_Schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

type AddStudentFormTypes = z.infer<typeof addStudentSchema>;

const EditStudentForm = () => {
  const form = useForm<AddStudentFormTypes>({
    resolver: zodResolver(addStudentSchema),
    defaultValues: {
      first_name: "James",
      last_name: "Mulabh",
      email: "james@example.com",
      registration_date: new Date(),
      gender: "Male",
      class: "Computer Science",
      phone: "1234567890",
      birth_date: new Date(),
      blood_group: "A+",
      roll_number: "202211087",
      address: "123 Main St",
    },
  });

  const onSubmit: SubmitHandler<AddStudentFormTypes> = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <Card>
          <CardContent className="py-8">
            <CardTitle className="pb-8 md:text-2xl text-xl">
              Edit Student
            </CardTitle>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="roll_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Roll Number
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter roll number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="registration_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Registration Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Enter registration date"
                            {...field}
                            value={
                              field.value instanceof Date
                                ? field.value.toISOString().split("T")[0]
                                : field.value
                            }
                            onChange={(e) => {
                              const dateValue = e.target.value
                                ? new Date(e.target.value)
                                : null;
                              field.onChange(dateValue);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter gender" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Class
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter class" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="birth_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Birth Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Enter birth date"
                            {...field}
                            value={
                              field.value instanceof Date
                                ? field.value.toISOString().split("T")[0]
                                : field.value
                            }
                            onChange={(e) => {
                              const dateValue = e.target.value
                                ? new Date(e.target.value)
                                : null;
                              field.onChange(dateValue);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="blood_group"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Blood Group
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter blood group" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default EditStudentForm;
