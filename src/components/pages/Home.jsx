import Iframe from "react-iframe";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image15 from "../images/home.gif";
import Image18 from "../images/home_mobile.gif";

import Image from "../images/sudinoi.webp";
import Image1 from "../images/sottofondazioni.webp";
import Image2 from "../images/consolidamentomurature.webp";
import Image3 from "../images/iniezioniconsolidanti.webp";
import Image4 from "../images/intonaciarmati.webp";
import Image5 from "../images/product.webp";
import Image6 from "../images/product1.webp";
import Image7 from "../images/sceltamigliore.webp";
import Image8 from "../images/migliorequalita.webp";
import Image9 from "../images/nopolo-tiburtino.webp";
import Image10 from "../images/casale-castellaccio.webp";
import Image11 from "../images/comelavoriamo.webp";
import Image12 from "../images/impianti.webp";
import Image13 from "../images/logo.svg";
import Image14 from "../images/qrcode.svg";

import global from "../../resources/global.json";
import { useOutletContext } from "react-router";
import "../../index.css";

export default function Home() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <section>
          <div
            className="header-home-page-center"
            style={{
              textAlign: "center",
              backgroundColor: "#23262d",
              height: "500px",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img src={Image15} alt="Appalto Roma" />
          </div>
        </section>

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
                    nostri tecnici l’affidabilità dei nostri operai e della
                    nostra attrezzatura ci permette di effettuare interventi di
                    manutenzione e restauro di edifici storici effettuando, con
                    il supporto anche di verifiche videoispettive e
                    termofotografiche interventi di:{" "}
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
                    href="/about"
                  >
                    Scopri di più →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
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
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
                  SOTTOFONDAZIONI
                </small>
              </div>
            </div>

            <div class="card">
              <div class="card__image-holder">
                <LazyLoadImage
                  className="card__image"
                  src={Image2}
                  height="200px"
                  alt="CONSOLIDAMENTO DI MURATURE"
                />
              </div>
              <div class="card-title">
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
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
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
                  INIEZIONI CONSOLIDANTI
                </small>
              </div>
            </div>

            <div class="card">
              <div class="card__image-holder">
                <LazyLoadImage
                  className="card__image"
                  src={Image4}
                  alt="INTONACI ARMATI"
                />
              </div>
              <div class="card-title">
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
                  INTONACI ARMATI
                </small>
              </div>
            </div>
          </div>
        </section>

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
                    Sviluppiamo e sperimentiamo soluzioni e sistemi tecnologici
                    per raggiungere i migliori risultati sul campo.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <LazyLoadImage src={Image5} alt="product" height="400px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
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
        </section>

        <section>
          <div class="container mt-5 mb-5">
            <div class="row">
              <div class="col-sm">
                <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                  I NOSTRI PROGETTI
                </h3>
                <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                  Esplora i nostri progetti
                </h1>
              </div>
              <div
                class="col-sm"
                style={{ fontFamily: "GothamBook", textAlign: "justify" }}
              >
                <p style={{ fontWeight: "bold" }}>INTERVENTI CHIAVI IN MANO</p>
                <p>
                  La nostra impresa mette a disposizione il know how acquisito e
                  le attrezzature necessarie alla realizzazione in regime di
                  qualità garantita ed assoluta sicurezza di:
                </p>

                <p>
                  <strong>
                    EDIFICI CONDOMINIALI, CASE INDIPENDENTI O A SCHIERA, VILLE,
                    STRUTTURE RICETTIVE, EDIFICI COMMERCIALI ED INDUSTRIALI.
                  </strong>
                </p>

                <p>
                  {" "}
                  Utilizzando le migliori e le più innovative tecnologie
                  presenti sul mercato siamo in grando di assicurare:{" "}
                </p>

                <p>
                  <strong>
                    STRUTTURE ANTISISMICHE TAMPONATURE ESTERNE ED INFISSI CLASSE
                    “A” INTERVENTI DI BIOARCHITETTURA IMPIANTI CENTRALIZZATI ED
                    AUTONOMI PANNELLI SOLARI TERMICI E FOTOVOLTAICI IMPIANTI
                    DOMOTICI
                  </strong>
                </p>
              </div>
              <div class="col-sm" style={{ textAlign: "center" }}>
                <a
                  className="btn4"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  href="/projects"
                >
                  Altri progetti →
                </a>
              </div>
            </div>
          </div>

          <div class="container" style={{ textAlign: "center" }}>
            <div class="row">
              <div class="col">
                <LazyLoadImage src={Image9} alt="polotuburtina" height="400" />
                <a
                  style={{
                    textDecoration: "none",
                    color: "#23262d",
                    fontFamily: "GothamBold",
                  }}
                  href="/projects"
                >
                  <p> POLO TECNOLOGICO TIBURTINO Via Tiburtina - ROMA</p>
                </a>
              </div>
              <div class="col">
                <LazyLoadImage
                  src={Image10}
                  alt="casalecastellaccio"
                  height="400"
                />
                <a
                  style={{
                    textDecoration: "none",
                    color: "#23262d",
                    fontFamily: "GothamBold",
                  }}
                  href="/projects"
                >
                  <p>CASALE CASTELLACCIO- ROMA</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <LazyLoadImage
                    src={Image8}
                    alt="MIGLIOREQUALITA"
                    height="400"
                  />
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

        <section>
          <div
            className="header-home"
            style={{
              backgroundImage: `url(${Image11})`,
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
            <div class="container">
              <div class="row" style={{ gap: "50px" }}>
                <div class="col" style={{ textAlign: "justify" }}>
                  <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                    COME LAVORIAMO
                  </h3>
                  <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                    Manutenzioni condominiali
                  </h1>
                  <p style={{ color: "black" }}>
                    Ristrutturazione di facciate, frontalini, balconi e terrazzi
                    recupero e/o integrazione dei ferri di armatura, ripristino
                    e/o sostituzione dei gocciolatoi con tecniche antisismiche
                    innovative di nostra produzione.
                  </p>
                </div>

                <div
                  class="col"
                  style={{
                    fontFamily: "GothamBook",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h1
                    style={{
                      color: "#34aadc",
                      fontFamily: "GothamBold",
                      fontSize: "100px",
                    }}
                  >
                    01
                  </h1>

                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Ci pensiamo Noi
                  </p>
                  <p>
                    Rifacimento e manutenzione coperture piane ed inclinate
                    demolizione coperture ammalorate, posa e fornitura massetti
                    alleggeriti, pendenze, coibentazioni
                  </p>
                </div>

                <div
                  class="col"
                  style={{
                    fontFamily: "GothamBook",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h1
                    style={{
                      color: "#34aadc",
                      fontFamily: "GothamBold",
                      fontSize: "100px",
                    }}
                  >
                    02
                  </h1>

                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Ideiamo Noi
                  </p>
                  <p>
                    Tetti giardino, coperture ventilate e microventilate,
                    pavimenti tradizionali o flottanti per integrazione
                    impiantistica, tetti in legno massello e lamellare...
                    sistemi di efficentamento
                  </p>
                </div>

                <div
                  class="col"
                  style={{
                    fontFamily: "GothamBook",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h1
                    style={{
                      color: "#34aadc",
                      fontFamily: "GothamBold",
                      fontSize: "100px",
                    }}
                  >
                    03
                  </h1>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Garantiamo Noi
                  </p>{" "}
                  <p>
                    Pareti ventilate, rivestimenti a cappotto interno ed
                    esterno, sostituzione infissi, verifiche delle trasmittanze
                    tramite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="header-home-impianti"
            style={{
              backgroundImage: `url(${Image12})`,
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
                COSA FACCIAMO
              </h3>
              <h1
                style={{
                  color: "white",
                  fontFamily: "GothamBold",
                  fontSize: "50px",
                  textAlign: "center",
                }}
              >
                Impianti
              </h1>
            </div>
            <form
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "black",
              }}
            >
              <div class="container" style={{ textAlign: "justify" }}>
                <div class="row" style={{ gap: "60px" }}>
                  <div class="col">
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❝
                    </h1>
                    <h4 style={{ fontStyle: "italic" }}>
                      I continui aggiornamenti a cui ci sottoponiamo
                      costantemente ci garantiscono la più ampia possibilita' di
                      progettare e poi costruire impianti tecnologici e tecnici
                      di qual si voglia carattere e dimensione. Possono essere
                      sia centralizzati che autonomi per uso civile o
                      industriale tutto certificato a norma di legge. Lavoriamo
                      inoltre su: impianti idraulici civili e industriali,
                      impianti di riscaldamento autonomo, impianti di
                      riscaldamento centralizzato, impianti di refrigerazione.
                    </h4>
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❞
                    </h1>
                  </div>
                  <div class="col">
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❝
                    </h1>
                    <h4 style={{ fontStyle: "italic" }}>
                      Impianti di immissione ed estrazione dell'aria anche per
                      grandi capannoni industriali o per singole unità
                      abitative. Strutture ricettive, impianti elettrici civili
                      e industriale, impianti domotici, protezione anti
                      intrusione, videosorveglianza ed illuminazione. Eseguiamo
                      anche lavori di impiantistica stradale come illuminazione,
                      cablaggi, linee elettriche e fibra ottica, fognature,
                      allacci in fogna, impianti di recupero di acque
                      meteoriche, impianti di recupero acque grigie civili e
                      industriali.
                    </h4>
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❞
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section style={{ backgroundImage: `url(${Image11})` }}>
          <div class="container mt-5" style={{ textAlign: "center" }}>
            <div class="row">
              <div class="col">
                <LazyLoadImage src={Image13} alt="appaltoroma" height="150" />
              </div>
              <div class="col">
                <LazyLoadImage
                  src={Image14}
                  alt="qrcode appaltoroma"
                  height="150"
                />
              </div>
              <div className="mt-5">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#23262d",
                    fontFamily: "GothamBook",
                  }}
                  href="/projects"
                >
                  <h1>
                    UFFICO ROMA:{" "}
                    <strong>Via Sante Monachesi, n°4, 00173 Roma (RM)</strong>{" "}
                  </h1>
                </a>
              </div>
              <div class="col mt-5">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.759992828528!2d12.57693478456841!3d41.83346599710838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325884eacaa1887%3A0xed17ef86dcef2445!2sVia%20Sante%20Monachesi%2C%204%2C%2000173%20Roma%20RM!5e0!3m2!1sit!2sit!4v1678985185172!5m2!1sit!2sit"
                  width="1000px"
                  height="400px"
                  id=""
                  className=""
                  placeItems="center"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <section>
          <div
            className="header-home-page-center"
            style={{
              backgroundImage: `url(${Image18})`,
              backgroundSize: "cover",
              backgroundPosition: "center",

              backgroundColor: "#23262d",
              height: "500px",
              display: "flex",
              placeItems: "center",
            }}
          ></div>
        </section>

        <section>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <LazyLoadImage src={Image} alt="SUDINOI" height="400" />
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
                    nostri tecnici l’affidabilità dei nostri operai e della
                    nostra attrezzatura ci permette di effettuare interventi di
                    manutenzione e restauro di edifici storici effettuando, con
                    il supporto anche di verifiche videoispettive e
                    termofotografiche interventi di:{" "}
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
                    href="/about"
                  >
                    Scopri di più →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
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
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
                  SOTTOFONDAZIONI
                </small>
              </div>
            </div>

            <div class="card">
              <div class="card__image-holder">
                <LazyLoadImage
                  className="card__image"
                  src={Image2}
                  height="200px"
                  alt="CONSOLIDAMENTO DI MURATURE"
                />
              </div>
              <div class="card-title">
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
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
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
                  INIEZIONI CONSOLIDANTI
                </small>
              </div>
            </div>

            <div class="card">
              <div class="card__image-holder">
                <LazyLoadImage
                  className="card__image"
                  src={Image4}
                  alt="INTONACI ARMATI"
                />
              </div>
              <div class="card-title">
                <small
                  style={{ textAlign: "center", fontFamily: "GothamBold" }}
                >
                  INTONACI ARMATI
                </small>
              </div>
            </div>
          </div>
        </section>

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
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <LazyLoadImage src={Image5} alt="product" height="200px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="header-home"
            style={{
              backgroundImage: `url(${Image7})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
              color: "#fff",
              height: "50vh",
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
                  fontSize: "30px",
                }}
              >
                Iniziamo il tuo nuovo progetto da sogno
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div class="container mt-5 mb-5">
            <div class="row">
              <div class="col-sm">
                <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                  I NOSTRI PROGETTI
                </h3>
                <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                  Esplora i nostri progetti
                </h1>
              </div>
              <div
                class="col-sm"
                style={{ fontFamily: "GothamBook", textAlign: "justify" }}
              >
                <p style={{ fontWeight: "bold" }}>INTERVENTI CHIAVI IN MANO</p>
                <p>
                  La nostra impresa mette a disposizione il know how acquisito e
                  le attrezzature necessarie alla realizzazione in regime di
                  qualità garantita ed assoluta sicurezza di:
                </p>

                <p>
                  <strong>
                    EDIFICI CONDOMINIALI, CASE INDIPENDENTI O A SCHIERA, VILLE,
                    STRUTTURE RICETTIVE, EDIFICI COMMERCIALI ED INDUSTRIALI.
                  </strong>
                </p>

                <p>
                  {" "}
                  Utilizzando le migliori e le più innovative tecnologie
                  presenti sul mercato siamo in grando di assicurare:{" "}
                </p>

                <p>
                  <strong>
                    STRUTTURE ANTISISMICHE TAMPONATURE ESTERNE ED INFISSI CLASSE
                    “A” INTERVENTI DI BIOARCHITETTURA IMPIANTI CENTRALIZZATI ED
                    AUTONOMI PANNELLI SOLARI TERMICI E FOTOVOLTAICI IMPIANTI
                    DOMOTICI
                  </strong>
                </p>
              </div>
              <div class="col-sm" style={{ textAlign: "center" }}>
                <a
                  className="btn4"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  href="/projects"
                >
                  Altri progetti →
                </a>
              </div>
            </div>
          </div>

          <div class="container" style={{ textAlign: "center" }}>
            <div class="row">
              <div class="col">
                <LazyLoadImage src={Image9} alt="polotuburtina" height="200" />
                <a
                  style={{
                    textDecoration: "none",
                    color: "#23262d",
                    fontFamily: "GothamBold",
                  }}
                  href="/projects"
                >
                  <p> POLO TECNOLOGICO TIBURTINO Via Tiburtina - ROMA</p>
                </a>
              </div>
              <div class="col">
                <LazyLoadImage
                  src={Image10}
                  alt="casalecastellaccio"
                  height="200"
                />
                <a
                  style={{
                    textDecoration: "none",
                    color: "#23262d",
                    fontFamily: "GothamBold",
                  }}
                  href="/projects"
                >
                  <p>CASALE CASTELLACCIO- ROMA</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <LazyLoadImage
                    src={Image8}
                    alt="MIGLIOREQUALITA"
                    height="200"
                  />
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
                    <ul style={{ fontSize: "15px" }}>
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

        <section>
          <div
            className="header-home"
            style={{
              backgroundImage: `url(${Image11})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
              color: "#fff",
              height: "100vh",
              display: "flex",
              placeItems: "center",
            }}
          >
            <div class="container">
              <div class="row" style={{ gap: "50px" }}>
                <div class="col" style={{ textAlign: "justify" }}>
                  <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                    COME LAVORIAMO
                  </h3>
                  <h1 style={{ color: "#23262d", fontFamily: "GothamBold" }}>
                    Manutenzioni condominiali
                  </h1>
                  <p style={{ color: "black" }}>
                    Ristrutturazione di facciate, frontalini, balconi e terrazzi
                    recupero e/o integrazione dei ferri di armatura, ripristino
                    e/o sostituzione dei gocciolatoi con tecniche antisismiche
                    innovative di nostra produzione.
                  </p>
                </div>

                <div
                  class="col"
                  style={{
                    fontFamily: "GothamBook",
                    color: "black",
                    textAlign: "left",
                    display: "grind",
                  }}
                >
                  <h1
                    style={{
                      color: "#34aadc",
                      fontFamily: "GothamBold",
                      fontSize: "50px",
                    }}
                  >
                    01
                  </h1>

                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Ci pensiamo Noi
                  </p>
                </div>

                <div
                  class="col"
                  style={{
                    fontFamily: "GothamBook",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h1
                    style={{
                      color: "#34aadc",
                      fontFamily: "GothamBold",
                      fontSize: "50px",
                    }}
                  >
                    02
                  </h1>

                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Ideiamo Noi
                  </p>
                </div>

                <div
                  class="col"
                  style={{
                    fontFamily: "GothamBook",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h1
                    style={{
                      color: "#34aadc",
                      fontFamily: "GothamBold",
                      fontSize: "50px",
                    }}
                  >
                    03
                  </h1>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Garantiamo Noi
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="header-home-impianti"
            style={{
              backgroundImage: `url(${Image12})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
              color: "#fff",
              height: "60vh",
              placeItems: "center",
            }}
          >
            <div>
              <h3 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                COSA FACCIAMO
              </h3>
              <h1
                style={{
                  color: "white",
                  fontFamily: "GothamBold",
                  fontSize: "50px",
                  textAlign: "center",
                }}
              >
                Impianti
              </h1>
            </div>
            <form
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "black",
              }}
            >
              <div class="container-grind" style={{ textAlign: "justify" }}>
                <div class="row" style={{ gap: "60px" }}>
                  <div class="col">
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❝
                    </h1>
                    <h6 style={{ fontStyle: "italic", textAlign: "center" }}>
                      I continui aggiornamenti a cui ci sottoponiamo
                      costantemente ci garantiscono la più ampia possibilita' di
                      progettare e poi costruire impianti tecnologici e tecnici
                      di qual si voglia carattere e dimensione.
                    </h6>
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❞
                    </h1>
                  </div>
                  <div class="col">
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❝
                    </h1>
                    <h6 style={{ fontStyle: "italic", textAlign: "center" }}>
                      Impianti di immissione ed estrazione dell'aria anche per
                      grandi capannoni industriali o per singole unita abitative
                      o strutture ricettive.
                    </h6>
                    <h1
                      style={{
                        color: "#34aadc",
                        fontSize: "50px",
                      }}
                    >
                      ❞
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section style={{ backgroundImage: `url(${Image11})` }}>
          <div class="container-flex mt-5" style={{ textAlign: "center" }}>
            <div class="row">
              <div class="col">
                <LazyLoadImage src={Image13} alt="appaltoroma" height="50" />
              </div>
              <div class="col">
                <LazyLoadImage
                  src={Image14}
                  alt="qrcode appaltoroma"
                  height="70"
                />
              </div>
              <div className="mt-5">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#23262d",
                    fontFamily: "GothamBook",
                  }}
                  href="/projects"
                >
                  <h3>
                    UFFICO ROMA:{" "}
                    <strong>Via Sante Monachesi, n°4, 00173 Roma (RM)</strong>{" "}
                  </h3>
                </a>
              </div>
              <div class="col mt-5">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.759992828528!2d12.57693478456841!3d41.83346599710838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325884eacaa1887%3A0xed17ef86dcef2445!2sVia%20Sante%20Monachesi%2C%204%2C%2000173%20Roma%20RM!5e0!3m2!1sit!2sit!4v1678985185172!5m2!1sit!2sit"
                  width="300px"
                  height="400px"
                  id=""
                  className=""
                  placeItems="center"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
