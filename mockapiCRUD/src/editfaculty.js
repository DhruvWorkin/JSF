import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFaculty = () => {
  const [data, setData] = useState({});
  const nav = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(
      "https://66b9ce57fa763ff550f99441.mockapi.io/api/v1/Faculty/" + params.id
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function editFaculty() {
    fetch(
      "https://66b9ce57fa763ff550f99441.mockapi.io/api/v1/Faculty/" + params.id,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      console.log(res.status);
      nav("/");
    });
  }

  return (
    <div>
      <label htmlFor="id">Faculty Id :</label>
      <input
        type="text"
        id="id"
        value={data.id}
        onChange={(e) => {
          setData({ ...data, id: e.target.value });
        }}
      />

      <label htmlFor="facultyName">Faculty Name :</label>
      <input
        type="text"
        id="facultyName"
        value={data.facultyName}
        onChange={(e) => {
          setData({ ...data, facultyName: e.target.value });
        }}
      />

      <label htmlFor="facultyExp">Faculty Experience :</label>
      <input
        type="text"
        id="facultyExp"
        value={data.facultyExp}
        onChange={(e) => {
          setData({ ...data, facultyExp: e.target.value });
        }}
      />
      <button
        onClick={() => {
          editFaculty();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default EditFaculty;
