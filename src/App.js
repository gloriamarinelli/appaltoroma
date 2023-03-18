import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/components/Navbar";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Bonus from "./components/pages/Bonus";
import Projects from "./components/pages/Projects";
import ErrorPage from "./components/pages/ErrorPage";
import React, { useState, useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeManager />,
    errorelement: (
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
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function HomeManager() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <>
      <Navbar windowSize={windowSize} />
      <Outlet context={[windowSize, setWindowSize]} />
      <Footer />
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
