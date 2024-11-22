import DashboardHeader from "@/components/dash-header";
import DashTwoCardWripper from "@/components/dashboard-two/dashTowCardWripper";
import React from "react";

const Dashboar2 = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Dashboard 2" />
        <DashTwoCardWripper />
      </section>
    </>
  );
};

export default Dashboar2;
