import cardsData from "@/data/dashboardThree/data";
import { dashThreeCardTypes } from "@/types/dashboardsTypes";
import { Icon } from "lucide-react";
import React from "react";

const DashboardThreeCardWripper = () => {
  return (
    <>
      <section className="bg-white rounded-md px-8 py-3 w-full shadow-lg">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {cardsData.map((data: dashThreeCardTypes) => (
            <div className="flex items-center gap-3" key={data.label}>
              <div
                className="w-14 h-14 rounded-full  flex items-center justify-center"
                style={{ background: `${data.color}` }}
              >
                {/* {data.icon} */}
                <data.icon size={32} className="text-white" />
              </div>
              <div>
                <h1 className="md:text-xl text-base">{data.label}</h1>
                <p className="md:text-2xl text-lg font-bold">{data.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardThreeCardWripper;
