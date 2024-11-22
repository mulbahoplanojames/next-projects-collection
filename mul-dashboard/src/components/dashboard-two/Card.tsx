import { dashTwoCardTypes } from "@/types/dashboardsTypes";

const DashTwoCard = ({ label, number, percentage, icon }: dashTwoCardTypes) => {
  return (
    <>
      <div className=" md:flex-1 w-full h-fit bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center flex-wrap gap-y-5 gap-x-4">
          <p className="text-[23px] font-bold">{label}</p>
          {icon}
        </div>
        <h1 className="text-4xl font-bold pb-6">{number}</h1>
        <div className="flex gap-2 text-lg">
          <div className="flex text-green-800 ">
            {/* <MdOutlineTrendingUp /> */}
            {percentage}
          </div>
          <p>since last week</p>
        </div>
      </div>
    </>
  );
};

export default DashTwoCard;
