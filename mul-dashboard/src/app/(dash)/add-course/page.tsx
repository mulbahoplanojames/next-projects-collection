import AddCourseForm from "@/components/course/AddCourseForm";
import DashboardHeader from "@/components/dash-header";

const AddCourse = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Add Course" />

        <AddCourseForm />
      </section>
    </>
  );
};

export default AddCourse;
