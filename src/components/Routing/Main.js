import React from "react";
import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import ParameterData from "./ParameterData";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Form from "./Form";
import Accordian from "./Accordian";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
export default function Main() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />}>
          <Route path="form" element={<Form />} />
          <Route path="accordian" element={<Accordian />} />
        </Route>
        {/* <Route path="contact/:id" element={<ParameterData />} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
