import {
  LucideBook,
  LucideDollarSign,
  LucideUser,
  LucideUsers,
} from "lucide-react";

const cardsData = [
  {
    id: 1,
    label: "Total Staden...",
    number: "450",
    color: " #4ddec1",
    value: "45",
    icon: <LucideUsers className="text-4xl text-white" />,
  },
  {
    id: 2,
    label: "New Stadents",
    number: "157",
    color: "#ffc269",
    value: "40",
    icon: <LucideUser className="text-4xl text-white" />,
  },
  {
    id: 3,
    label: "Total Courses",
    number: "52",
    color: "#ff6982",
    value: "85",
    icon: <LucideBook className="text-4xl text-white" />,
  },
  {
    id: 4,
    label: "Fees Collectio",
    number: "13,921",
    color: "#57a5ff",
    value: "50",
    icon: <LucideDollarSign className="text-4xl text-white" />,
  },
];

export default cardsData;
