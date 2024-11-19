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
                  <p className="text-2xl pb-2">{item.number}</p>
                </div>
              </div>
              <div className="text-white">
                <progress
                  className="progress w-full progress-primary"
                  value={item.value}
                  max="100"
                ></progress>

                <p className="md:text-xl text-base">{item.percentage}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashOneCardsWripper;
