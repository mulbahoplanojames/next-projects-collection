  <section className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg mt-12">
      {/* Search Input */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Teachers
        </h1>
        <Input
          type="text"
          placeholder="Search by name, email, or subject..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
        />
      </div>

      {/* Scrollable Table Wrapper */}
       <Table className="w-full min-w-[800px] border border-gray-200 dark:border-gray-700">
          <TableHeader className="bg-gray-200 dark:bg-gray-800">
            <TableRow>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
                #
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
                Name
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
                Department
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
                Email
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
                Class
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
                Subject
              </TableCell>
              <TableCell className="font-semibold text-gray-600 dark:text-gray-400 py-3">
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
                  <TableCell className="py-3">{teacher.id}</TableCell>
                  <TableCell className="py-3">{teacher.name}</TableCell>
                  <TableCell className="py-3">{teacher.department}</TableCell>
                  <TableCell className="py-3">{teacher.email}</TableCell>
                  <TableCell className="py-3">{teacher.classname}</TableCell>
                  <TableCell className="py-3">{teacher.subject}</TableCell>
                  <TableCell className="py-3">{teacher.rating}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-3 text-gray-500"
                >
                  No teachers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
    </section>
