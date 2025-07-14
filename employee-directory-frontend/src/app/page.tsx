'use client';

import { useQuery } from '@apollo/client';
import { GET_ALL_EMPLOYEES } from '../graphql/queries';
import Link from 'next/link';
import { useState, useMemo } from 'react';

// ✅ Define the Employee type
type Employee = {
  id: string;
  name: string;
  position: string;
  department: string;
};

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_ALL_EMPLOYEES);
  const [departmentFilter, setDepartmentFilter] = useState('');

  // ✅ Provide proper type fallback
  const employees: Employee[] = data?.getAllEmployees || [];

  const uniqueDepartments = useMemo(() => {
    const departments = employees.map((emp) => emp.department);
    return [...new Set(departments)];
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    if (!departmentFilter) return employees;
    return employees.filter((emp) => emp.department === departmentFilter);
  }, [employees, departmentFilter]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading employees.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employee Directory</h1>
        <Link href="/add-employee">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add New Employee
          </button>
        </Link>
      </div>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Department:</label>
        <select
          className="border px-2 py-1 rounded"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="">All</option>
          {uniqueDepartments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border border-gray-200 shadow-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Position</th>
            <th className="p-3">Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <Link
                  href={`/employee/${emp.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {emp.name}
                </Link>
              </td>
              <td className="p-3">{emp.position}</td>
              <td className="p-3">{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}