"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { coursesSchema } from "@/lib/Zod_Schema";
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
import Swal from "sweetalert2";
import CancelButton from "./CancelButton";

type CourseType = z.infer<typeof coursesSchema>;

const EditCourseForm = () => {
  const form = useForm<CourseType>({
    resolver: zodResolver(coursesSchema),
    defaultValues: {
      course_title: "Computer Science",
      course_code: "CSC101",
      course_image: undefined,
      professor: "John Doe",
      duration: "2 months",
      number_of_students: "20",
      course_price: "1000",
    },
  });

  const onSubmit: SubmitHandler<CourseType> = async (data) => {
    try {
      console.log(data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Course Edited Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
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
              Edit Course
            </CardTitle>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="course_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Course Title
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
                    name="course_code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Course Code
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="course_image"
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Course Image
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="Enter first name"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              onChange(file);
                            }}
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
                    name="professor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Professor
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Professor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Duration
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Duration" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="number_of_students"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Number of Students
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Number of Students" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="course_price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="md:text-base text-base">
                          Course Price
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Course Price" {...field} />
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

export default EditCourseForm;
