import DashboardHeader from "@/components/dash-header";
import { ChartBar } from "@/components/dashboard-one/charts/bar-chart";
import { ChartBar2 } from "@/components/dashboard-one/charts/bar-chart-2";
import DashOneCardsWripper from "@/components/dashboard-one/dashOneCardsWripper";
import NewStudentsTable from "@/components/dashboard-one/tables/NewStudents-Table";
import TeacherTable from "@/components/dashboard-one/tables/Teacher-Table";

export default function Page() {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Dashboard" />
        <DashOneCardsWripper />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12 md:px-1">
          <ChartBar2 />
          <ChartBar />
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <TeacherTable />
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
          <NewStudentsTable />
        </div>
      </section>
    </>
  );
}
