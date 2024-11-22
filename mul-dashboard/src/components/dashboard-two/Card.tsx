import { dashTwoCardTypes } from "@/types/dashboardsTypes";

const DashTwoCard = ({ label, number, percentage, icon }: dashTwoCardTypes) => {
  return (
    <>
      <div className=" w-full h-fit bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-y-5 gap-x-4 md:pb-2 pb-1">
          <p className="md:text-[23px] text-xl font-bold">{label}</p>
          <p className="md:text-6xl text-4xl">{icon}</p>
        </div>
        <h1 className="md:text-4xl text-2xl font-bold md:pb-4 pb-2">
          {number}
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-0.5 text-lg">
          <div className="text-green-800 ">{percentage}</div>
          <p className="md:text-base text-sm text-gray-500">since last week</p>
        </div>
      </div>
    </>
  );
};

export default DashTwoCard;
