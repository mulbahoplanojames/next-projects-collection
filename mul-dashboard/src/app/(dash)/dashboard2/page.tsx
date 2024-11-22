import DashboardHeader from "@/components/dash-header";
import { ChartBar } from "@/components/dashboard-one/charts/bar-chart";
import { ChartBar2 } from "@/components/dashboard-one/charts/bar-chart-2";
import TeacherTable from "@/components/dashboard-one/tables/Teacher-Table";
import DashTwoCardWripper from "@/components/dashboard-two/dashTowCardWripper";
import React from "react";

const Dashboar2 = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Dashboard 2" />
        <DashTwoCardWripper />
        <TeacherTable />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12 md:px-1">
          <ChartBar2 text={"Overall Metrics"} />
          <ChartBar text={"Students Performance"} />
        </div>
      </section>
    </>
  );
};

export default Dashboar2;
