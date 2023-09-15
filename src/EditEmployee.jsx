import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `https://sweede.app/DeliveryBoy/update-Employee/${id}`,
        employee
      );

      navigate("/");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl text-blue-950 mb-8">
        Employee Registration Form
      </h2>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-6">
              <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
                First Name:
              </label>
              <input
                className="block min-h-[auto] w-full rounded-lg border-0 bg-transparent px-3 py-[0.52rem] bg-blue-50"
                type="text"
                placeholder="Enter your name"
                name="FirstName"
                value={employee.FirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div lassName="relative mb-6">
              <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
                Last Name:
              </label>
              <input
                className="block min-h-[auto] w-full rounded-lg border-0 bg-transparent px-3 py-[0.52rem] bg-blue-50"
                type="text"
                placeholder="Enter your name"
                name="LastName"
                value={employee.LastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
              Date of Birth:
            </label>
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="DOB"
              className="border py-2 px-3 text-gray-950 rounded-lg bg-blue-50"
              value={employee.DOB}
              placeholder="Enter you dob"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
              Study:
            </label>
            <select
              name="Study"
              className="border py-2 px-3 text-gray-950 rounded-lg bg-blue-50"
              value={employee.Study}
              onChange={handleChange}
              required
            >
              <option value="">Select Study</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Sc">M.Sc</option>
              <option value="Ph.D">Ph.D</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-6">
              <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
                Start Date:
              </label>
              <input
                type="text"
                name="StartDate"
                placeholder="2-6-22"
                className="block min-h-[auto] w-full rounded-lg border-0 bg-transparent px-3 py-[0.52rem] bg-blue-50"
                value={employee.StartDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative mb-6">
              <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
                End Date:
              </label>
              <input
                type="text"
                name="EndDate"
                placeholder="2-7-23"
                className="block min-h-[auto] w-full rounded-lg border-0 bg-transparent px-3 py-[0.52rem] bg-blue-50"
                value={employee.EndDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
              Current Salary:
            </label>
            <input
              type="text"
              name="CurrentSalary"
              className="border py-2 px-3 text-gray-950 rounded-lg bg-blue-50"
              placeholder="30000"
              value={employee.CurrentSalary}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="mb-2  tracking-wide font-medium text-lg text-gray-950">
              Description:
            </label>
            <textarea
              name="Description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-blue-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              value={employee.Description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-evenly mt-8">
            <button
              className="text-gray-950 bg-gray-400 font-medium  text-lg px-6 py-3 rounded outline-none  mr-1 mb-1 "
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              className="text-gray-950 border border-gray-950 font-medium  text-lg px-10 py-3  rounded outline-none focus:outline-none mr-1 mb-1 "
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
