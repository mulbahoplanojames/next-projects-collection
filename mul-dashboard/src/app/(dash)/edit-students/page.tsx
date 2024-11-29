import DashboardHeader from "@/components/dash-header";
import EditStudentForm from "@/components/students/EditStudentsForm";

const EditStudents = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Edit Students" />

        <EditStudentForm />
      </section>
    </>
  );
};

export default EditStudents;
