import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

const AddStudentForm = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <Card>
          <CardContent className="py-8">
            <CardTitle>Add Student</CardTitle>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default AddStudentForm;
