"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { teachersData } from "@/data/dashboardOne/data";

import { Input } from "@/components/ui/input";

const TeacherTable = () => {
  const [search, setSearch] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(teachersData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = teachersData.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(value) ||
        teacher.email.toLowerCase().includes(value) ||
        teacher.subject.toLowerCase().includes(value)
    );
    setFilteredTeachers(filtered);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg mt-12 col-span-4">
        {/* Search Input */}
        <div className="p-4 sm:p-6">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Teachers
            </h1>
            <Input
              type="text"
              placeholder="Search by name, email, or subject..."
              value={search}
              onChange={handleSearch}
              className="w-full sm:max-w-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            />
          </div>

          {/* Table Container with horizontal scroll */}
          <div className="-mx-4 sm:-mx-6">
            {" "}
            {/* Negative margin to extend to edges */}
            <div className="inline-block w-full align-middle">
              <div className="overflow-x-auto border-x border-gray-200 dark:border-gray-700">
                <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <TableHeader className="bg-gray-200 dark:bg-gray-800">
                    <TableRow>
                      <TableCell className="sticky left-0 bg-gray-200 dark:bg-gray-800 font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        #
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Name
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Department
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Email
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Class
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Subject
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Rating
                      </TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTeachers.length > 0 ? (
                      filteredTeachers.map((teacher) => (
                        <TableRow
                          key={teacher.id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                          <TableCell className="sticky left-0 bg-gray-50 dark:bg-gray-900 py-3 px-4 whitespace-nowrap">
                            {teacher.id}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {teacher.name}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {teacher.department}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {teacher.email}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {teacher.classname}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {teacher.subject}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {teacher.rating}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          className="text-center py-3 px-4 text-gray-500"
                        >
                          No teachers found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherTable;
