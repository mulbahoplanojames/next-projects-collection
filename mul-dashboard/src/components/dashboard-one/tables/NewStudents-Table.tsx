"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { newStudentsData } from "@/data/dashboardOne/data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Define the number of items per page if i forget in the future :)
const ITEMS_PER_PAGE = 6;

const NewStudentsTable = () => {
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(newStudentsData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setCurrentPage(1);

    const filtered = newStudentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(value) ||
        student.brance.toLowerCase().includes(value) ||
        student.assignedprofessor.toLowerCase().includes(value)
    );
    setFilteredStudents(filtered);
  };

  // The below code is to Calculate pagination values just in case i forget in the future :)
  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg mt-12 col-span-4">
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

          <div className="-mx-4 sm:-mx-6">
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
                        Assigned Professor
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Date Of Admit
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Fees
                      </TableCell>
                      <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3 px-4 whitespace-nowrap">
                        Branch
                      </TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentStudents.length > 0 ? (
                      currentStudents.map((student) => (
                        <TableRow
                          key={student.id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                          <TableCell className="sticky left-0 bg-gray-50 dark:bg-gray-900 py-3 px-4 whitespace-nowrap">
                            {student.id}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.name}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.assignedprofessor}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.dateofadmit}
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap ">
                            <Badge
                              className={`${
                                student.fees === "paid"
                                  ? "bg-green-500"
                                  : student.fees === "unpaid"
                                  ? "bg-red-500"
                                  : student.fees === "incomplete"
                                  ? "bg-[#ffc269]"
                                  : ""
                              }`}
                            >
                              {student.fees}
                            </Badge>
                          </TableCell>
                          <TableCell className="py-3 px-4 whitespace-nowrap">
                            {student.brance}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="text-center py-3 px-4 text-gray-500"
                        >
                          No students found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {filteredStudents.length > 0 && (
            <div className="flex items-center justify-between mt-4 px-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, filteredStudents.length)} of{" "}
                {filteredStudents.length} students
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Button
                      key={pageNum}
                      variant={pageNum === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewStudentsTable;
