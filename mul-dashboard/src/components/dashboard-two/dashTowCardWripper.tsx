import { dashTwocardData } from "@/data/dashboardTwo/data";
import DashTwoCard from "./Card";
import { dashTwoCardTypes } from "@/types/dashboardsTypes";

const DashTwoCardWripper = () => {
  return (
    <>
      <div className="flex flex-wrap w-[45%] items-center  gap-x-6 gap-y-10 px-1">
        {/* Map over the cardTwoData array and return a CardTwo component
				for each item in the array */}
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
    </>
  );
};

export default DashTwoCardWripper;
