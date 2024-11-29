import DashboardHeader from "@/components/dash-header";
import EditCourseForm from "@/components/edit-coures/EditCourseForm";

const EditCourse = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Edit Course" />

        <EditCourseForm />
      </section>
    </>
  );
};

export default EditCourse;
