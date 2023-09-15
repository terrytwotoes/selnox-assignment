import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EmployeeTable />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
