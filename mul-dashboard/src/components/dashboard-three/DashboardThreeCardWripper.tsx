import cardsData from "@/data/dashboardThree/data";
import { dashThreeCardTypes } from "@/types/dashboardsTypes";
import React from "react";

const DashboardThreeCardWripper = () => {
  return (
    <>
      <section className="bg-white rounded-md px-8 py-3 w-full shadow-lg">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {cardsData.map((data: dashThreeCardTypes) => (
            <div className="flex items-center gap-3" key={data.label}>
              <div
                className="lg:w-14 lg:h-14 h-10 w-10 rounded-full  flex items-center justify-center"
                style={{ background: `${data.color}` }}
              >
                {/* {data.icon} */}
                <data.icon size={28} className="text-white" />
              </div>
              <div>
                <h1 className="lg:text-xl text-base text-black">
                  {data.label}
                </h1>
                <p className="lg:text-2xl text-lg font-bold text-black">
                  {data.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardThreeCardWripper;
