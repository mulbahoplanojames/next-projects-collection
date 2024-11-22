import { dashTwoCardTypes } from "@/types/dashboardsTypes";
import { Coffee, LucideBookCopy, User, Users } from "lucide-react";

export const dashTwocardData: dashTwoCardTypes[] = [
  {
    id: 1,
    label: "Total Staden...",
    number: "4,586",
    percentage: "10.32%",
    icon: <Users className="text-4xl text-orange-400" />,
  },
  {
    id: 2,
    label: "New Studen..",
    number: "323",
    percentage: "21.19%",
    icon: <User className="text-4xl  text-[#00e396]" />,
  },
  {
    id: 3,
    label: "Total Courses",
    number: "103",
    percentage: "17.64%",
    icon: <LucideBookCopy className="text-4xl  text-[#673ab7]" />,
  },
  {
    id: 4,
    label: "Visitors",
    number: "2,352",
    percentage: "19.27%",
    icon: <Coffee className="text-4xl text-[#989898]" />,
  },
];
