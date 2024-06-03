import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../../App.css";

export default function Navigation() {
  return (
    <>
      <div className="container">
        <div className="row py-4 shadow ">
          <div className="col-12 text-center">
            <NavLink to="/" className="mx-4 text-decoration-none ">
              Home
            </NavLink>
            <NavLink to="about" className="text-decoration-none">
              About
            </NavLink>
            <NavLink to="contact" className="mx-4 text-decoration-none">
              Contact
            </NavLink>

            <NavLink to="blog" className="text-decoration-none">
              Blog
            </NavLink>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
