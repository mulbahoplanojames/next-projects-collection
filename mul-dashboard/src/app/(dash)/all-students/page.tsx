import AllStudentsTable from "@/components/all-students/tables/AllStudentTable";
import DashboardHeader from "@/components/dash-header";

const AllStudents = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="All Students List" />
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <AllStudentsTable />
        </div>
      </section>
    </>
  );
};

export default AllStudents;
