// import AddStudentForm from "@/components/add-student/AddStudentForm";
import DashboardHeader from "@/components/dash-header";
import AddDepartmentForm from "@/components/departments/AddDepartmentsForm";
import React from "react";

const AddDepartment = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Add Department" />

        <AddDepartmentForm />
      </section>
    </>
  );
};

export default AddDepartment;
