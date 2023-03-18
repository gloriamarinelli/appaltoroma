import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import Image from "../images/logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top" >
        <div className="container">
          <Link to="/">
            <LazyLoadImage src={Image} alt="Appalto Roma" width="" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto"
              style={{ fontFamily: "GothamBook",
              }}
            >
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  Chi siamo
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark " to="/projects">
                  Progetti
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/bonus">
                  Ecobonus e Sismabonus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
