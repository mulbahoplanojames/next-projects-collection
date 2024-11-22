import { dashTwoCardTypes, professorsListTypes } from "@/types/dashboardsTypes";
import { Coffee, LucideBookCopy, User, Users } from "lucide-react";

export const dashTwocardData: dashTwoCardTypes[] = [
  {
    id: 1,
    label: "Total Staden...",
    number: "4,586",
    percentage: "10.32%",
    icon: <Users className="text-4xl text-orange-400 bg-red-700" />,
  },
  {
    id: 2,
    label: "New Studen..",
    number: "323",
    percentage: "21.19%",
    icon: <User className="  text-[red]" size={32} />,
  },
  {
    id: 3,
    label: "Total Courses",
    number: "103",
    percentage: "17.64%",
    icon: <LucideBookCopy className="  text-[#673ab7]" size={32} />,
  },
  {
    id: 4,
    label: "Visitors",
    number: "2,352",
    percentage: "19.27%",
    icon: <Coffee className="text-4xl text-[#989898]" />,
  },
];

// import avatar1 from "/public/user1.jpg";
// import avatar2 from "/public/user2.jpg";
// import avatar3 from "/public/user3.jpg";
// import avatar4 from "/public/user4.jpg";
// import avatar5 from "/public/user5.jpg";
// import avatar6 from "/public/user6.jpg";

export const professorsListData: professorsListTypes[] = [
  {
    id: 1,
    name: "John Koluya-(M.Com, PHD)	",
    status: "Available",
    color: "green",
    avatar: "/public/user1.jpg",
  },
  {
    id: 2,
    name: "John Deo-(md.com, PHD)",
    status: "On Leave",
    color: "blue",
    avatar: "/public/user2.jpg",
  },
  {
    id: 3,
    name: "Michael Laue-(B.C.A., M.C.A.)",
    status: "Available",
    color: "green",
    avatar: "/public/user3.jpg",
  },
  {
    id: 4,
    name: "Emily Matthew-(B.E., M.E.)",
    status: "Not Available",
    color: "Red",
    avatar: "/public/user4.jpg",
  },
  {
    id: 5,
    name: "William Peter-(md.com, PHD)",
    status: "On Leave",
    color: "blue",
    avatar: "/public/user5.jpg",
  },
  {
    id: 6,
    name: "Jacob Ryan-(M.S.W, PHD)",
    status: "Not Available",
    color: "Red",
    avatar: "/public/user6.jpg",
  },
];
