import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (id) => {
    employees.filter((employee) => {
      return employee.id === id;
    });
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    axios
      .get("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`)
      .then((response) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
        console.log("Employee deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  return (
    <div>
      <h1 className="font-semibold text-3xl text-blue-950 mb-8">
        Employee List
      </h1>
      <div className="px-2 max-w-5xl mx-auto">
        <div className="flex justify-end">
          <Link to="/add" className="">
            <button className="bg-blue-500 text-white flex justify-center items-center gap-2  text-xl px-4 py-3 rounded shadow hover:bg-blue-700 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              <AiOutlinePlus />
              ADD
            </button>
          </Link>
        </div>

        <div className="relative overflow-x-auto  rounded-3xl max-w-screen-lg mx-auto">
          <table className="w-full text-sm text-left text-gray-400 border-2 ">
            <thead className="text-xs text-blue-950 uppercase   border-blue-900 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  DOB
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                  End Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr className="border-b" key={employee.id}>
                  <td className="px-6 py-4">{`${employee.FirstName} ${employee.LastName}`}</td>
                  <td className="px-6 py-4">{employee.DOB}</td>
                  <td className="px-6 py-4">{employee.StartDate}</td>
                  <td className="px-6 py-4">{employee.EndDate}</td>
                  <td className="px-6 py-4">{employee.Description}</td>
                  <td className="">
                    {!isMenuOpen && (
                      <div className="relative inline-block text-left">
                        <button onClick={toggleMenu}>
                          <CiMenuKebab className="cursor-pointer" />
                        </button>
                      </div>
                    )}
                    {isMenuOpen && (
                      <div className="left-0 border border-gray-300">
                        <button
                          className="flex justify-between items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left border-b"
                          onClick={() => handleEdit(employee.id)}
                        >
                          <AiTwotoneEdit />
                          Edit
                        </button>
                        <button
                          className="flex justify-between items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                          onClick={() => handleDelete(employee.id)}
                        >
                          <AiFillDelete />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTable;
