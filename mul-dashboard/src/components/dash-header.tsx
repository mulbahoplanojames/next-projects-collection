import { ChevronRight, House } from "lucide-react";
import React from "react";

const DashboardHeader = ({ text }: { text: string }) => {
  return (
    <>
      <section className="flex items-center justify-between mb-12 mt-2">
        <h1 className="md:text-2xl text-xl font-bold">{text}</h1>

        {/* Link back to Home */}
        <div className="bg-neutral-100 md:py-3 md:px-5 flex items-center justify-center gap-2 px-3 py-2 rounded-full shadow-lg">
          {/* Icon */}
          <House className="text-gray-400" />

          {/* Link */}
          <a href="" className="hover:text-blue-500 text-base text-gray-400">
            Home
          </a>
          <ChevronRight className="text-gray-400" />
          <span className="text-base text-black">Dashboard</span>
        </div>
      </section>
    </>
  );
};

export default DashboardHeader;
