import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
      <>
          <Link to="/">index</Link>
          <br />
          <Link to="/list">Faculty list</Link>
          <br />
          <Link to="/table">Faculty Table</Link>
          <br />
          <Link to="/details/:id">Faculty Detail</Link>
          <br />
          <Outlet />
    </> 
)
}

export default Nav