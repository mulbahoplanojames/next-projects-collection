import DashboardHeader from "@/components/dash-header";
import StudentCard from "@/components/StudentCard";
import { allStudentsGridViewData } from "@/data/all-students/data";
import Link from "next/link";
import React from "react";

const AllStudentsGridView = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="All Students List" />
        <div className="space-x-4">
          <Link
            href={"./all-students"}
            className="text-xl focus:bg-[#6673fc] shadow-lg py-2 px-4 focus:text-white rounded-full dark:bg-white dark:text-black dark:hover:bg-[#6673fc] dark:hover:text-white"
          >
            List View
          </Link>
          <Link
            href={"./all-students-grid"}
            className="text-xl focus:bg-[#6673fc] shadow-lg py-2 px-4 focus:text-white rounded-full dark:bg-white dark:text-black dark:hover:bg-[#6673fc] dark:hover:text-white"
          >
            Grid View
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6 mt-12">
          {allStudentsGridViewData.map((item) => (
            <StudentCard
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              subject={item.subject}
              location={item.location}
              city={item.city}
              contact={item.contact}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllStudentsGridView;
