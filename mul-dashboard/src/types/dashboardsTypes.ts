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
