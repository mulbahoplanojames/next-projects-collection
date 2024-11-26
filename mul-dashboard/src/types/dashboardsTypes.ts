import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";
import { RefAttributes } from "react";

export type TeacherDataTypes = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  department: string;
  classname?: string;
  subject: string;
  rating: string;
};

export type dashTwoCardTypes = {
  id?: number;
  label: string;
  number: string;
  percentage: string;
  icon: React.ReactNode;
};

export type professorsListTypes = {
  id: number;
  name: string;
  status: string;
  color: string;
  avatar: string;
};

export type dashThreeCardTypes = {
  label: string;
  count: number;
  color: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type allStudentsGridViewTypes = {
  id: number;
  avatar: StaticImageData;
  name: string;
  subject: string;
  location: string;
  city: string;
  contact: string;
};
