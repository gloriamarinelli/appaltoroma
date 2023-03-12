import React, { Component } from "react";
import Image from "../images/logo1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../index.css";

export default function Bonus(){
    return (
        <>
        <div
              className="header-bonus"
              style={{
                padding: "10px",
                textAlign: "center",
                color: "#fff",
                marginBottom: "10px",
                height: "80vh",
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
                  color: "#23262d"
                }}
              >
              ECOBONUS E SISMABONUS
              </h1>
            </div>
<div>
<p>Credito di Imposta del 110%</p>

<p>Decreto Rilancio 2020</p>

<p>Disponibilità della Impresa APPALTO ROMA s.r.l. di concedere
lo sconto su fattura pari all’intero importo dei lavori eseguiti
dall’Impresa, riservando al Condominio la possibilità di ottenere il</p>

<p>Miglioramento energetico richiesto dalla normativa a</p>
<h1>Costo Zero</h1>

</div>
</>    
    )
}