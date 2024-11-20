import React from "react";
import { Card, CardContent } from "../ui/card";
import cardsData from "@/data/dashboardOne/data";

const DashOneCardsWripper = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-4 md:mt-6 mt-3">
        {cardsData.map((item) => (
          <Card
            key={item.id}
            style={{ background: `${item.color}` }}
            className="rounded-3xl "
          >
            <CardContent className="py-2">
              <div className="flex items-center gap-3 ">
                <div className="md:w-12 md:h-12 w-10 h-10 rounded-full bg-gradient-to-r from-slate-200 text-white font-extrabold  flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="">
                  <p className="md:text-xl text-base pb-2">{item.label}</p>
                  <p className=" text-xl pb-2">{item.number}</p>
                </div>
              </div>
              <div className="w-full mt-2 ">
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-800">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    {item.value}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashOneCardsWripper;
