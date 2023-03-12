import React from "react";
import Image from "../images/logo1.png";
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
            color: "#23262d",
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
                <LazyLoadImage src={Image} alt="TedxSapienzaU" height="300" />
              </div>
              </div>
              <div className="col-lg-6">
							<div className="p-5">
                <h1 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>PRESENTAZIONE DELL'IMPRESA</h1>
                <p
                  className="lead mt-3"
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  La Società Appalto Roma fa parte di un gruppo aziendale che si
                  occupa di interventi di manutenzione, ristrutturazione e
                  restauro di edifici civili e sociali ed ha acquisito nel tempo
                  una esperienza specifica sia in ordine alla costruzione che
                  alla ristrutturazione di immobili, delle loro facciate e del
                  loro efficientamento energetico unitamente al loro adeguamento
                  impiantistico come pure a seguito di numerosi interventi, al
                  loro miglioramento sismico. Lo svolgimento della sua attività
                  gode dell’esperienza maturata nel corso di vari decenni da
                  parte dei suoi tecnici, sia nella ristrutturazione e restauro
                  di edifici d’epoca quali il Castello dell’Oscano o Palazzo
                  Grande di Corciano che nella ristrutturazione di edifici fine
                  1800 come l’Hotel Quirinale o l’Hotel Villa Linneo ambedue di
                  Roma, che ancora con i numerosi interventi di ristrutturazione
                  e miglioramento sismico eseguiti a seguito del terremoto del
                  1.997 in Umbria e Marche, nel terremoto del 2.000 della Valle
                  dell’Aniene e da ultimo nel terremoto del 2009 che ha colpito
                  l’Abruzzo ed in particolare la provincia de L’Aquila.
                  Attualmente opera nel settore delle manutenzioni condominiali
                  unitamente a quello delle nuove costruzioni.
                </p>
              </div>
              </div>
            </div>
         </div>
      </section>
    </>
  );
}
