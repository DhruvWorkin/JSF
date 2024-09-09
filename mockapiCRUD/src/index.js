import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacTab from "./facultyData";
import FacDetails from "./details";
import AddFaculty from "./addnew";
import EditFaculty from "./editfaculty";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<FacTab />} />
          <Route path="/details/:id" element={<FacDetails />} />
          <Route path="/add" element={<AddFaculty />} />
          <Route path="/edit/:id" element={<EditFaculty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
