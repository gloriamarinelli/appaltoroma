import React from "react";
import "../../resources/styles/projectsstyle.css";

export default function ProjectsCard({ titolo, immagine, descrizione }) {
  return (
    <>
      <section>
        <div className="container mb-5">
          <div className="card-pro">
            <div className="card-projects">
              <input type="checkbox" className="btn1" />
              <div className="overlay">
                <p>{descrizione}</p>
              </div>
              <img src={immagine} alt="project Appalto Roma" />
            </div>
            <h5 style={{ textAlign: "center", fontWeight: "bold", padding:"20px" }}>
              {titolo}
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
