import { dashThreeCardTypes } from "@/types/dashboardsTypes";
import { CalendarFold, User, User2, UtensilsCrossed } from "lucide-react";

const cardsData: dashThreeCardTypes[] = [
  {
    label: "Students",
    count: 972,
    icon: User2,
    color: "#4d45b4",
  },
  {
    label: "Teachers",
    count: 745,
    icon: User,
    color: "#ff7c69",
  },
  {
    label: "Events",
    count: 745,
    icon: CalendarFold,
    color: "#fbc341",
  },
  {
    label: "Food",
    count: 745,
    icon: UtensilsCrossed,
    color: "#303971",
  },
];

export default cardsData;
