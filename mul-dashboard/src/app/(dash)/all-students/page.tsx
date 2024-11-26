import AllStudentsTable from "@/components/all-students/tables/AllStudentTable";
import DashboardHeader from "@/components/dash-header";
import Link from "next/link";

const AllStudents = () => {
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
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <AllStudentsTable />
        </div>
      </section>
    </>
  );
};

export default AllStudents;
