import React from "react";
import Image from "../images/sudinoi.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image1 from "../images/sottofondazioni.jpg";
import Image2 from "../images/consolidamentodimurature.jpg";
import Image3 from "../images/iniezioniconsolidanti.jpeg";
import Image4 from "../images/intonaciarmati.jpg";
import Image5 from "../images/product.jpg";
import Image6 from "../images/product1.jpg";
import Image7 from "../images/sceltamigliore.png";
import Image8 from "../images/migliorequalità.jpg";

import "../../index.css";

export default function Home() {
  return (
    <>
      <div
        className="header-home"
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
            fontSize: "100px",
            fontWeight: "bold",
            fontFamily: "GothamBold",
            color: "#23262d",
          }}
        >
          HOME
        </h1>
      </div>

      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5 d-flex justify-content-center align-items-center">
                <LazyLoadImage src={Image} alt="SUDINOI" height="800" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                  SU DI NOI
                </h3>
                <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                  Soluzioni creative dal Team di professionisti
                </h1>

                <p
                  className="lead mt-3"
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  La strumentazione unita alla provata professionalità dei
                  nostri tecnici l’affidabilità dei nostri operai e della nostra
                  attrezzatura ci permette di effettuare interventi di
                  manutenzione e restauro di edifici storici effettuando, con il
                  supporto anche di verifiche videoispettive e termofotografiche
                  interventi di:{" "}
                  <strong>
                    SOTTOFONDAZIONI, CONSOLIDAMENTO DI MURATURE, INIEZIONI
                    CONSOLIDANTI, VERIFICA DELLE TRASMITTANZE TERMICHE,
                    INTERVENTI DI DEUMIDIFICAZIONE, INTONACI ARMATI,
                    INCATENAMENTI STRUTTURALI, CONSOLIDAMENTO DI SOLAI,
                    FASCIATURE IN KEVLAR O IN CARBONIO.
                  </strong>
                </p>
                <a
                  className="btn4"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  href="/projects"
                >
                  Scopri di più →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cards">
        <div className="card">
          <div className="card__image-holder">
            <LazyLoadImage
              className="card__image"
              src={Image1}
              alt="SOTTOFONDAZIONI"
            />
          </div>
          <div className="card-title">
            <small style={{ textAlign: "center", fontFamily: "GothamBold" }}>
              SOTTOFONDAZIONI
            </small>
          </div>
        </div>

        <div class="card">
          <div class="card__image-holder">
            <LazyLoadImage
              className="card__image"
              src={Image1}
              alt="CONSOLIDAMENTO DI MURATURE"
            />
          </div>
          <div class="card-title">
            <small style={{ textAlign: "center", fontFamily: "GothamBold" }}>
              CONSOLIDAMENTO DI MURATURE
            </small>
          </div>
        </div>

        <div class="card">
          <div class="card__image-holder">
            <LazyLoadImage
              className="card__image"
              src={Image3}
              alt="INIEZIONI CONSOLIDANTI"
            />
          </div>
          <div class="card-title">
            <small style={{ textAlign: "center", fontFamily: "GothamBold" }}>
              INIEZIONI CONSOLIDANTI
            </small>
          </div>
        </div>

        <div class="card">
          <div class="card__image-holder">
            <LazyLoadImage
              className="card__image"
              src={Image1}
              alt="INTONACI ARMATI"
            />
          </div>
          <div class="card-title">
            <small style={{ textAlign: "center", fontFamily: "GothamBold" }}>
              INTONACI ARMATI
            </small>
          </div>
        </div>
      </div>

      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                  PRODUCT
                </h3>
                <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                  Le migliori soluzioni
                </h1>

                <p
                  className="lead mt-3"
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  Massimizza ogni centimetro quadrato
                </p>
                <div className="p-5 d-flex justify-content-left align-items-left">
                  <LazyLoadImage src={Image6} alt="product" height="100px" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5 d-flex justify-content-center align-items-center">
                <LazyLoadImage src={Image5} alt="product" height="500px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="header-home"
        style={{
          backgroundImage: `url(${Image7})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          color: "#fff",
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div>
          <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
            LA TUA SCELTA MIGLIORE
          </h3>
          <h1
            style={{
              color: "white",
              fontFamily: "GothamBold",
              fontSize: "50px",
            }}
          >
            Iniziamo il tuo nuovo progetto da sogno
          </h1>
        </div>
      </div>

      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5 d-flex justify-content-center align-items-center">
                <LazyLoadImage src={Image8} alt="MIGLIOREQUALITA" height="400" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                  MIGLIORE QUALITÀ
                </h3>
                <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                  Ristrutturazioni e Restauri
                </h1>

                <p
                  className="lead mt-3"
                  style={{
                    textAlign: "justify",
                    fontFamily: "GothamBook",
                    fontSize: "18px",
                  }}
                >
                  La professionalita’ dei nostri tecnici e le attrezzature a
                  nostra disposizione oggi ci permettono di effettuare
                  tempestivamente interventi di:

                  <ul style={{ fontSize: "20px" }}>
                    <li>SOTTOFONDAZIONI</li>
                    <li>INIEIZIONI CONSOLIDANTI</li>
                    <li>INTONACI ARMATI</li>
                    <li>FASCIATURE IN KEVLAR</li>
                    <li>FASCIATURE IN FIBRA DI CARBONIO</li>
                  </ul>
                </p>
                <a
                  className="btn4"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  href="/bonus"
                >
                  Esplora →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
