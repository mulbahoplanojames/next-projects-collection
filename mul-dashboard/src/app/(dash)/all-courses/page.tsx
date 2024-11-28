import DashboardHeader from "@/components/dash-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import allCoursesData from "@/data/all-courses/data";
import Image from "next/image";
import React from "react";

const AllCourses = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="All Courses List" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6 mt-12">
          {allCoursesData.map((course) => (
            <Card key={course.course_id}>
              <CardContent className="hover:bg-primary_1 hover:rounded-md hover:text-white">
                <CardHeader className="rounded-md">
                  <Image src={course.course_image} alt={course.course_title} />
                </CardHeader>
                <p className="font-semibold ">{course.course_title}</p>
                <p className="pt-2">{course.professor}</p>
                <div className="flex gap-3 justify-between items-center pt-2">
                  <p>{course.duration}</p>
                  <p>{course.number_of_students} Students</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCourses;
