import DashboardHeader from "@/components/dash-header";
import AllDepartmentsTable from "@/components/departments/AllDepartmentsTable";

const AllDepartments = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="All Departments " />

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <AllDepartmentsTable />
        </div>
      </section>
    </>
  );
};

export default AllDepartments;
