import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddFaculty = () => {
  const [data, setData] = useState({
    FacultyName: "",
    FacultyExp: 0,
  });
  const nav = useNavigate();

  function addFaculty() {
    fetch("https://66b9ce57fa763ff550f99441.mockapi.io/api/v1/Faculty/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.status);
      nav("/");
    });
  }

  return (
    <div>
      <label htmlFor="id">Faculty Id : </label>
      <input
        type="text"
        id="id"
        onChange={(e) => {
          setData({ ...data, id: e.target.value });
        }}
      />
      <label htmlFor="facultyName">FacultyName : </label>
      <input
        type="text"
        id="facultyName"
        onChange={(e) => {
          setData({ ...data, facultyName: e.target.value });
        }}
      />

      <label htmlFor="facultyExp">FacultyExp</label>
      <input
        type="text"
        id="facultyExp"
        onChange={(e) => {
          setData({ ...data, facultyExp: e.target.value });
        }}
      />

      <button
        onClick={() => {
          addFaculty();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddFaculty;
