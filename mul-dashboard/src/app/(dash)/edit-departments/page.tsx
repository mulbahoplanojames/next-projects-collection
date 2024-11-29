// import AddStudentForm from "@/components/add-student/AddStudentForm";
import DashboardHeader from "@/components/dash-header";
import EditDepartmentForm from "@/components/departments/EditDepartmentForm";
import React from "react";

const EditDepartment = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Edit Department" />

        <EditDepartmentForm />
      </section>
    </>
  );
};

export default EditDepartment;
