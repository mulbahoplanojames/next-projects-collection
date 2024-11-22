import { professorsListData } from "@/data/dashboardTwo/data";

const ProfessorsList = () => {
  return (
    <>
      <div className=" bg-red-600 dark:bg-gray-950 h-fit col-span-2 rounded-md py-4 ">
        <h1 className="text-xl font-bold border-b-2 border-dotted pb-3 pl-8">
          Professors List
        </h1>
        {/* Use the map function to loop through all the professors from the data */}
        {professorsListData.map((data) => (
          <div className="flex px-5 py-4 gap-6" key={data.id}>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                {/* Set the source of the avatar image */}
                <img src={data.avatar} />
              </div>
            </div>
            <div>
              <h1 className="text-base">{data.name}</h1>
              <p style={{ color: `${data.color}` }} className="text-sm">
                {/* Display the status of the professor */}
                {data.status}
              </p>
            </div>
            <div className=""></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessorsList;
