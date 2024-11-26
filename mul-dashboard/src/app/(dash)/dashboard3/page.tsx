import DashboardHeader from "@/components/dash-header";
import { ChartBar } from "@/components/dashboard-one/charts/bar-chart";
import { ChartBar2 } from "@/components/dashboard-one/charts/bar-chart-2";
import DashboardThreeCardWripper from "@/components/dashboard-three/DashboardThreeCardWripper";

const Dashboar3 = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Dashboard 3" />
        <DashboardThreeCardWripper />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12 md:px-1">
          <ChartBar2 text={"Students Performance"} />
          <ChartBar text={"Teachers Overview"} />
        </div>
      </section>
    </>
  );
};

export default Dashboar3;
