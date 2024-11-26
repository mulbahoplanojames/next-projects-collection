import { allStudentsGridViewTypes } from "@/types/dashboardsTypes";
import Image from "next/image";
import Link from "next/link";

const StudentCard = (props: allStudentsGridViewTypes) => {
  // Destructuring the properties passed from parent component
  const { avatar, name, subject, location, city, contact } = props;

  // Rendering a single card using the passed properties
  return (
    <>
      <div className="w-full h-fit text-center shadow-2xl dark:bg-slate-950  rounded-md py-4 px-6 ">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-neutral-500 ring-offset-2 ring-offset-neutral-500">
            <Image src={avatar} alt={name} />
          </div>
        </div>
        <h1 className="text-2xl font-bold p-2">{name}</h1>
        <p className="pb-1">{subject}</p>
        <p className="pb-1">{location}</p>
        <p className="pb-4">{city}</p>
        <p className="pb-3">{contact}</p>
        <Link href="">
          <button className="py-1 px-4 rounded-full bg-[#e91e63] text-white shadow-md">
            Read More
          </button>
        </Link>
      </div>
    </>
  );
};

export default StudentCard;
