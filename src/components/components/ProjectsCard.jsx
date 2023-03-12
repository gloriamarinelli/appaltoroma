import React from "react";
import "../../resources/styles/projectsstyle.css";

export default function ProjectsCard({ titolo, immagine }) {
  return (
    <>
      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={immagine} alt="" />
            </figure>
            <div class="article-body">
              {" "}
              <a>
                {" "}
                <h2 style={{ textAlign: "center" }}>{titolo}</h2>
              </a>
            </div>
          </div>{" "}
        </article>
      </section>
    </>
  );
}
