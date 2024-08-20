import React, { useEffect, useState } from "react";

function Faculties() {
  const [Faculty, setFaculty] = useState([]);
  useEffect(() => {
    fetch("https://66b9ce57fa763ff550f99441.mockapi.io/api/v1/Faculty")
    .then((res) => {
      return res.json();
     })
    .then((res) => {
      setFaculty(res);
    });
  }, []);
  return (
    <>
      <h1>Faculty List</h1>
      <ul>
        {Faculty.map((fac) => (
          <li key={fac.id}>
            {fac.id}-{fac.facultyName}-{fac.facultyExp}
            <img
              src={fac.facultyImage}
              alt="faculty-img"
              height="50"
              width="50"
            ></img>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Faculties;