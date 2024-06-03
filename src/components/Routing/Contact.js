import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="row bg-primary-subtle p-3">
          <div className="col-12 text-center mt-4">
            <h1>Contact Page</h1>
            <p className="lh-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="row py-3 shadow-sm bg-secondary ">
          <div className="col-12 text-center ">
            <Link to="form" className="mx-4 text-decoration-none text-light ">
              Form
            </Link>
            <Link to="accordian" className="text-decoration-none text-light ">
              Accordian
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
