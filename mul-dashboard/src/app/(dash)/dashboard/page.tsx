import DashboardHeader from "@/components/dash-header";
import { ChartBar } from "@/components/dashboard-one/bar-chart";
import { ChartBar2 } from "@/components/dashboard-one/bar-chart-2";
import DashOneCardsWripper from "@/components/dashboard-one/dashOneCardsWripper";

export default function Page() {
  return (
    <section className="md:px-6 px-0 py-6">
      <DashboardHeader text="Dashboard" />
      <DashOneCardsWripper />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12 md:px-1 ">
        <ChartBar2 />
        <ChartBar />
      </div>
    </section>
  );
}
