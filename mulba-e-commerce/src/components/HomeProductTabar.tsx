import { productTabData } from "@/data/productTabData";
import { Repeat } from "lucide-react";
import React from "react";

interface HomeProductTabarProps {
  selectedTab: string;
  onSelectedTab: (tab: string) => void;
}

const HomeProductTabar: React.FC<HomeProductTabarProps> = ({
  selectedTab,
  onSelectedTab,
}) => {
  return (
    <>
      <section className="flex items-center gap-1.5 text-sm font-semibold">
        <div className="flex gap-1.5 items-center">
          {productTabData.map((tab) => (
            <button
              key={tab?.label}
              onClick={() => onSelectedTab(tab?.label)}
              className={`border border-black px-4 py-1.5  md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white ${
                selectedTab === tab?.label && "bg-black text-white"
              }`}
            >
              {tab?.label}
            </button>
          ))}
        </div>
        <button
          className={`border border-black px-4 py-1.5  md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white`}
        >
          <Repeat />
        </button>
      </section>
    </>
  );
};

export default HomeProductTabar;
