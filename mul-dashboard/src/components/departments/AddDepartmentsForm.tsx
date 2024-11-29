"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { departmentsSchema } from "@/lib/Zod_Schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import CancelButton from "../course/CancelButton";

type CourseType = z.infer<typeof departmentsSchema>;

const AddDepartmentForm = () => {
  const form = useForm<CourseType>({
    resolver: zodResolver(departmentsSchema),
    defaultValues: {
      department_name: "",
      head_of_department: "",
      established_year: "",
      student_capacity: "",
      details: "",
    },
  });

  const onSubmit: SubmitHandler<CourseType> = async (data) => {
    try {
      console.log(data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Course Added Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <Card>
          <CardContent className="py-8">
            <CardTitle className="pb-8 md:text-2xl text-xl">
              Add Course
            </CardTitle>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="department_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Department Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Department Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="head_of_department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Head of Department
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Head of Department"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="established_year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Established Year
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Established Year"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="student_capacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Student Capacity
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Student Capacity"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter Depatment Details"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mx-auto text-center space-x-6">
                  <Button
                    type="submit"
                    className="bg-primary_1 px-6 hover:bg_blue-700/80 text-lg"
                  >
                    Submit
                  </Button>
                  <CancelButton />
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default AddDepartmentForm;
