import StudentCard from "@/components/StudentCard";
import { allStudentsGridViewData } from "@/data/all-students/data";
import React from "react";

const AllStudentsGrid = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6">
          {allStudentsGridViewData.map((item) => (
            <StudentCard
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              subject={item.subject}
              location={item.location}
              city={item.city}
              contact={item.contact}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllStudentsGrid;
