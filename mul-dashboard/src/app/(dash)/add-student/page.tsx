// import AddStudentForm from "@/components/add-student/AddStudentForm";
import DashboardHeader from "@/components/dash-header";
import AddStudentForm from "@/components/students/AddStudentForm";
import React from "react";

const AddStudent = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Add Student" />

        <AddStudentForm />
      </section>
    </>
  );
};

export default AddStudent;
