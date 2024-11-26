"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import allStudentsTableData from "@/data/all-students/data";
import Image from "next/image";
import DeleteButton from "../DeleteBtton";
import EditButton from "../EditButton";

const AllStudentsTable = () => {
  const [search, setSearch] = useState("");
  const [filteredTeachers, setFilteredTeachers] =
    useState(allStudentsTableData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = allStudentsTableData.filter(
      (student) =>
        student.name.toLowerCase().includes(value) ||
        student.name.toLowerCase().includes(value) ||
        student.department.toLowerCase().includes(value)
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
              New Students List
            </h1>
            <Input
              type="text"
              placeholder="Search by name, branch, or assigned Professor..."
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
                        Ava
                      </TableCell>
                      <TableCell className="sticky left-0 bg-gray-200 dark:bg-gray-800 font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Roll No.
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Name
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Department
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Mobile
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Email
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Admission Date
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTeachers.length > 0 ? (
                      filteredTeachers.map((student) => (
                        <TableRow
                          key={student.id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                          <TableCell className="sticky left-0 bg-gray-50 dark:bg-gray-900 py-3 px-4 whitespace-nowrap">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <Image
                                  fill
                                  src={student.avatar}
                                  alt={student.name}
                                />
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.rollnumber}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.name}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.department}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.mobile}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.email}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.admissiondate}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            <div className="flex gap-2">
                              <EditButton />
                              <button className="btn btn-secondary btn-sm">
                                View
                              </button>
                              <DeleteButton />
                            </div>
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

export default AllStudentsTable;
