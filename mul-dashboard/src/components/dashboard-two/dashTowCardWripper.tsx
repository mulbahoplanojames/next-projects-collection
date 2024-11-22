import { dashTwocardData } from "@/data/dashboardTwo/data";
import DashTwoCard from "./Card";
import { dashTwoCardTypes } from "@/types/dashboardsTypes";
import { ChartBar } from "../dashboard-one/charts/bar-chart";

const DashTwoCardWripper = () => {
  return (
    <>
      <section className="grid md:grid-cols-5 gap-5 gap-y-8 sm:grid-cols-1 grid-cols-1">
        <div className="grid md:grid-cols-2 grid-cols-2  items-center  gap-x-6 gap-y-5 px-1 col-span-3">
          {dashTwocardData.map((data: dashTwoCardTypes) => (
            <DashTwoCard
              // Unique key for each card component
              key={data.id}
              label={data.label}
              number={data.number}
              percentage={data.percentage}
              icon={data.icon}
            />
          ))}
        </div>
        <div className="bg-blue-600 w-full col-span-2">
          <ChartBar />
        </div>
      </section>
    </>
  );
};

export default DashTwoCardWripper;
