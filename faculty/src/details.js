import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
function FacDetails() {
    const nav = useNavigate();
    const params = useParams();
    const [Faculty, setFaculty] = useState([]);
    useEffect(() => {
    fetch("https://66b9ce57fa763ff550f99441.mockapi.io/api/v1/Faculty/"+ params.id)
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
      <h1>Faculty List</h1>
      <table>
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Faculty Name</th>
            <th>Faculty Experience</th>
            <th>Faculty Image</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
            <>
              <tr key={Faculty.id}>
                <td>{Faculty.id}</td>
                <td>{Faculty.facultyName}</td>
                <td>{Faculty.facultyExp}</td>
                <td>
                  <img
                    src={Faculty.facultyImage}
                    alt="faculty-img"
                    width="100"
                    height="100"
                  />
                </td>
                      <td><button onClick={
                          () => nav("/table/")}>Back
                      </button></td>
              </tr>
            </>

        </tbody>
      </table>
    </>
  );
}

export default FacDetails;
