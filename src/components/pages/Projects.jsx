import React from "react";
import Image from "../images/projects.png";
import ProjectsCard from "../components/ProjectsCard";

import Image1 from "../images/condominio-via-barilatti.webp";
import Image2 from "../images/viatolosa.webp";
import Image3 from "../images/Alessandro-Codivilla-1.webp";
import Image4 from "../images/Via-Passo-Lombardo-7.webp";
import Image5 from "../images/pinsaccoccia.webp";
import Image6 from "../images/nopolo-tiburtino.webp";
import Image7 from "../images/castelverde.webp";
import Image8 from "../images/casale-castellaccio.webp";
import Image9 from "../images/Osteria-del-curato.webp";
import Image10 from "../images/ostia-murature.webp";
import Image11 from "../images/oscano-dallalto.webp";
import Image12 from "../images/massaia-.webp";
import Image13 from "../images/foa-balconi.webp";
import Image14 from "../images/CONDOMINIO-di-Via-Cherso.webp";
import Image15 from "../images/palazzo-grande-corciano.webp";
import Image16 from "../images/oscano-ingresso.webp";

export default function Bonus() {
  return (
    <>
      <div
        className="header-projects"
        style={{
          backgroundImage: `url(${Image})`,
          bacjgroundSize: "cover",
          padding: "10px",
          color: "#fff",
          marginBottom: "10px",
          height: "60vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5"
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            fontFamily: "GothamBold",
            color: "white",
          }}
        >
          PROGETTI
        </h1>
      </div>

      <section class="articles">
        <ProjectsCard
          titolo="CONDOMINIO Via Barillatti – ROMA"
          immagine={Image1}
        />
        <ProjectsCard
          titolo="CONDOMINIO Via Tolosa – ROMA EUR"
          immagine={Image2}
        />
        <ProjectsCard
          titolo="CONDOMINIO Via Alessandro Codivilla – ROMA"
          immagine={Image3}
        />
        <ProjectsCard
          titolo="EDIFICIO MONOFAMILIARE Via Passo Lombardo N° 126 – ROMA"
          immagine={Image4}
        />
        <ProjectsCard
          titolo="PIANSACCOCCIA 2 Via Enrico Tallone - ROMA"
          immagine={Image5}
        />
        <ProjectsCard
          titolo="POLO TECNOLOGICO TIBURTINO Via Tiburtina - ROMA"
          immagine={Image6}
        />
        <ProjectsCard
          titolo="CASTEL VERDE COLLE DEGLI ABETI Via Cardinale Luigi Traglia - ROMA"
          immagine={Image7}
        />
        <ProjectsCard
          titolo="CASALE CASTELLACCIO- ROMA"
          immagine={Image8}
        />
        <ProjectsCard
          titolo="OSTERIA DEL CURATO"
          immagine={Image9}
        />
        <ProjectsCard
          titolo="OSTIA"
          immagine={Image10}
        />
        <ProjectsCard
          titolo="CASTELLO DELL’OSCANO"
          immagine={Image11}
        />
        <ProjectsCard
          titolo="CONDOMINIO MASSAIA 39 Via Guglielmo Massaia 39 - ROMA"
          immagine={Image12}
        />
        <ProjectsCard
          titolo="CONDOMINIO FOA’ 45 Via Pio Foa’ 45 - ROMA"
          immagine={Image13}
        />
        <ProjectsCard
          titolo="CONDOMINIO Via Cherso N° 59 – ROMA"
          immagine={Image14}
        />
        <ProjectsCard
          titolo="PALAZZO GRANDE Corciano (PG)"
          immagine={Image15}
        />
        <ProjectsCard
          titolo="CASTELLO DELL’OSCANO Cenerente (PG) Torre Circolare Del 1600 E Successive Integrazioni Del 1800 D.C."
          immagine={Image16}
        />
      </section>
    </>
  );
}
