import React from "react";
import Image from "../images/logo1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../index.css";

export default function About() {
  return (
    <>
      <div
        className="header-about"
        style={{
          padding: "10px",
          textAlign: "center",
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
          CHI SIAMO
        </h1>
      </div>

      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5 d-flex justify-content-center align-items-center">
                <LazyLoadImage
                  src={Image}
                  alt="Chi siamo Appalto Roma"
                  height="300"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h1 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                  PRESENTAZIONE DELL'IMPRESA
                </h1>
                <p
                  className="mt-3"
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  La Società <strong>Appalto Roma</strong> fa parte di un gruppo
                  aziendale che si occupa di interventi di manutenzione,
                  ristrutturazione e restauro di edifici civili e sociali ed ha
                  acquisito nel tempo un'esperienza specifica sia nella
                  costruzione che nella ristrutturazione di immobili, delle
                  facciate e tenendo sempre in considerazione l'efficientamento
                  energetico, l'adeguamento impiantistico e il miglioramento
                  sismico degli edifici.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  Lo svolgimento della sua attività si basa sull'esperienza
                  maturata nel corso degli anni da parte dei suoi tecnici, sia
                  nella ristrutturazione che nel restauro di edifici d’epoca
                  quali il Castello dell’Oscano o il Palazzo Grande di Corciano.
                  Inoltre l'azienda <strong>Appalto Roma</strong> si è occupata
                  della ristrutturazione di edifici di fine '800 come l’Hotel
                  Quirinale e l’Hotel Villa Linneo di Roma.{" "}
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  <strong>Appalto Roma</strong> ha assunto un ruolo importante
                  nei numerosi interventi di ristrutturazione e miglioramento
                  sismico eseguiti a seguito del terremoto del 1997 in Umbria e
                  Marche, nel terremoto del 2000 della Valle dell’Aniene e
                  nell'ultimo terremoto del 2009 che ha colpito L'Aquila e la
                  sua provincia. Attualmente opera nel settore delle
                  manutenzioni condominiali insieme a quello delle nuove
                  costruzioni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
