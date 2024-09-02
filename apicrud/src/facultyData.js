import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacTab() {
  const nav = useNavigate();
  const params = useParams();
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
  console.log(Faculty);
  return (
    <>
      <center>
        <h1>Faculty List</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Faculty Name</th>
              <th>Faculty Experience</th>
              <th>Faculty Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Faculty.map((item) => (
              <>
                { console.log("###",item.facultyImage)}
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.facultyName}</td>
                  <td>{item.facultyExp}</td>
                  <td>
                    <img
                      src={item.facultyImage}
                      alt="faculty-img"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>
                    <button onClick={() => nav("/details/" + item.id)}>
                      Details
                    </button>
                    <button>Edit</button>
                    <button
                      onClick={() => {
                        fetch(
                          "https://66b9ce57fa763ff550f99441.mockapi.io/api/v1/Faculty/"+item.id,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((res) => {
                            return res.json();
                          })
                          .then((res) => {
                            setFaculty(Faculty.filter(fac => fac.id != res.id));
                          });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default FacTab;
