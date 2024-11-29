import DashboardHeader from "@/components/dash-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import teacherApiType from "@/types/apiTypes";
import axios from "axios";
import { Mail, User } from "lucide-react";
import Image from "next/image";

const fetchTeachers = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const AllTeachers = async () => {
  const result = await fetchTeachers();

  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="All Teachers" />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-10">
          {result.users.slice(0, 9).map((teacher: teacherApiType) => (
            <Card key={teacher.id}>
              <CardContent className="text-center">
                <div className="rounded-md mx-auto w-24 h-24 mt-3 overflow-hidden bg-blue-500">
                  {teacher.image ? (
                    <Image
                      src={teacher.image}
                      alt={teacher.firstName}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </div>
                <p className="font-semibold pt-3">
                  {teacher.firstName} {teacher.lastName}
                </p>
                <p className="py-2">Teacher</p>
                <p className="py-2">{teacher.university}</p>
                <p>{teacher.phone}</p>
                <div className="flex justify-center pt-3 items-center md:gap-5 gap-2 ">
                  <Button className="bg-primary_1 hover:bg-white hover:text-primary_1 hover:border-primary_1 border-transparent hover:border-2">
                    <User /> Profile
                  </Button>
                  <Button className="bg-white border-2 text-primary_1 border-primary_1 hover:bg-primary_1 hover:text-white">
                    <Mail /> Chart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllTeachers;
