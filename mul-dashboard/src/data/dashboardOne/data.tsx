import { TeacherDataTypes } from "@/types/dashboardsTypes";
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

export const teachersData: TeacherDataTypes[] = [
  {
    id: 1,
    name: "John Doe",
    department: "Science",
    email: "xyz@email.com",
    classname: "12A",
    subject: "Biology",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Mathematics",
    email: "jane@email.com",
    classname: "10B",
    subject: "Algebra",
    rating: "4.2",
  },
  {
    id: 3,
    name: "Alice Johnson",
    department: "English",
    email: "alice@email.com",
    classname: "11C",
    subject: "Literature",
    rating: "4.7",
  },
  {
    id: 4,
    name: "David Brown",
    department: "History",
    email: "david@email.com",
    classname: "12C",
    subject: "World History",
    rating: "5.0",
  },
  {
    id: 5,
    name: "Emily Wilson",
    department: "Art",
    email: "emily@email.com",
    classname: "10B",
    subject: "Painting",
    rating: "4.3",
  },
  {
    id: 6,
    name: "Michael Lee",
    department: "Physical Education",
    email: "michael@email.com",
    classname: "9A",
    subject: "Basketball",
    rating: "4.8",
  },
  {
    id: 7,
    name: "Emily Wilson",
    department: "Art",
    email: "emily@email.com",
    classname: "6B",
    subject: "Painting",
    rating: "4.3",
  },
  {
    id: 8,
    name: "Alice Johnson",
    department: "English",
    email: "alice@email.com",
    classname: "10D",
    subject: "Literature",
    rating: "4.7",
  },
  {
    id: 9,

    name: "Jane Smith",
    department: "Mathematics",
    email: "jane@email.com",
    classname: "9B",
    subject: "Algebra",
    rating: "4.2",
  },
];

// ------------------------------------------------------------------------------------------

// const paid = (
//   <button className="cursor-text px-2 py-1 text-base bg-green-500 rounded-sm">
//     Paid
//   </button>
// );

// const unpaid = (
//   <button className="cursor-text px-2 py-1 text-base  bg-red-500 rounded-sm">
//     Unpaid
//   </button>
// );

// const "unpaid2" = (
//   <button className="bg-[#ffc269]  rounded-sm text-base py-1 px-2 cursor-text">
//     Unpaid
//   </button>
// );
export const newStudentsData = [
  {
    id: 1,
    number: "1",
    name: "	Jens Brincker",
    assignedprofessor: "Kenny Josh",
    dateofadmit: "27/05/2016",
    brance: "Commerce",
    fees: "paid",
  },
  {
    id: 2,
    number: "2",
    name: "Mark Hay",
    assignedprofessor: "Mark",
    dateofadmit: "26/05/2017",
    brance: "Mechanical",
    fees: "unpaid",
  },
  {
    id: 3,
    number: "3",
    name: "	Anthony Davie",
    assignedprofessor: "Cinnabar",
    dateofadmit: "21/05/2016",
    brance: "Science",
    fees: "paid",
  },
  {
    id: 4,
    number: "4",
    name: "David Perry",
    assignedprofessor: "Felix",
    dateofadmit: "20/04/2016",
    brance: "Commerce",
    fees: "incomplete",
  },
  {
    id: 5,
    number: "5",
    name: "Anthony Davie",
    assignedprofessor: "Beryl",
    dateofadmit: "24/05/2016",
    brance: "Mechanical",
    fees: "paid",
  },
  {
    id: 6,
    number: "6",
    name: "Alan Gilchrist",
    assignedprofessor: "Joshep",
    dateofadmit: "22/05/2016",
    brance: "M.B.A.",
    fees: "unpaid",
  },
  {
    id: 7,
    number: "7",
    name: "Emily Wilson",
    assignedprofessor: "Sharma",
    dateofadmit: "18/06/2016",
    brance: "Science",
    fees: "paid",
  },
  {
    id: 8,
    number: "8",
    name: "Alice Johnson",
    assignedprofessor: "Jayesh",
    dateofadmit: "17/05/2016",
    brance: "Commerce",
    fees: "incomplete",
  },
  {
    id: 9,
    number: "9",
    name: "Jane Smith",
    assignedprofessor: "Mathematics",
    dateofadmit: "17/05/2016",
    brance: "Mechanical",
    fees: "paid",
  },
];
