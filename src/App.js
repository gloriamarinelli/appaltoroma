import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/components/Navbar";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Bonus from "./components/pages/Bonus";
import ErrorPage from "./components/pages/ErrorPage";
import React, { Component }  from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        <Navbar />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appaltoroma",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bonus",
        element: <Bonus />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}



