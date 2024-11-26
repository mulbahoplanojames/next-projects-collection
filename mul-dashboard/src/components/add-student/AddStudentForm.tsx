import { Card, CardContent, CardTitle } from "../ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudentSchema } from "@/lib/Zod_Schema";
// import { useForm,  } from "react-hook-form";

import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type addStudentFormTypes = z.infer<typeof addStudentSchema>;

const AddStudentForm = () => {
  const form = useForm<addStudentFormTypes>({
    resolver: zodResolver(addStudentSchema),
  });

  const onSubmit: SubmitHandler<addStudentFormTypes> = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <Card>
          <CardContent className="py-8">
            <CardTitle>Add Student</CardTitle>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default AddStudentForm;
