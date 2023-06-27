import React from "react";
import Image from "../images/logo1.webp";
import Image1 from "../images/chisiamo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../index.css";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";
import Image11 from "../images/comelavoriamo.webp";
import Image13 from "../images/logo.svg";
import Image14 from "../images/qrcode.svg";
import Iframe from "react-iframe";
import "../../index.css";


export default function About() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <div
          className="header-about"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repea",
            backgroundSize: "cover",
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

        <section >
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
                    La Società <strong>Appalto Roma</strong> fa parte di un
                    gruppo aziendale che si occupa di interventi di
                    manutenzione, ristrutturazione e restauro di edifici civili
                    e sociali ed ha acquisito nel tempo un'esperienza specifica
                    sia nella costruzione che nella ristrutturazione di
                    immobili, delle facciate e tenendo sempre in considerazione
                    l'efficientamento energetico, l'adeguamento impiantistico e
                    il miglioramento sismico degli edifici.
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
                    quali il Castello dell’Oscano o il Palazzo Grande di
                    Corciano. Inoltre l'azienda <strong>Appalto Roma</strong> si
                    è occupata della ristrutturazione di edifici di fine '800
                    come l’Hotel Quirinale e l’Hotel Villa Linneo di Roma.{" "}
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
                    sismico eseguiti a seguito del terremoto del 1997 in Umbria
                    e Marche, nel terremoto del 2000 della Valle dell’Aniene e
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
        <div
          className="header-about"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repea",
            backgroundSize: "cover",
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            marginBottom: "10px",
            height: "30vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              color: "white",
            }}
          >
            CHI SIAMO
          </h1>
        </div>

        <section>
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <LazyLoadImage
                    src={Image}
                    alt="Chi siamo Appalto Roma"
                    height="200"
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
                      
                      fontFamily: "GothamBook",
                      fontSize: "18px",
                    }}
                  >
                    La Società <strong>Appalto Roma</strong> fa parte di un
                    gruppo aziendale che si occupa di interventi di
                    manutenzione, ristrutturazione e restauro di edifici civili
                    e sociali ed ha acquisito nel tempo un'esperienza specifica
                    sia nella costruzione che nella ristrutturazione di
                    immobili, delle facciate e tenendo sempre in considerazione
                    l'efficientamento energetico, l'adeguamento impiantistico e
                    il miglioramento sismico degli edifici.
                  </p>
                  <p
                    style={{
                     
                      fontFamily: "GothamBook",
                      fontSize: "18px",
                    }}
                  >
                    Lo svolgimento della sua attività si basa sull'esperienza
                    maturata nel corso degli anni da parte dei suoi tecnici, sia
                    nella ristrutturazione che nel restauro di edifici d’epoca
                    quali il Castello dell’Oscano o il Palazzo Grande di
                    Corciano. Inoltre l'azienda <strong>Appalto Roma</strong> si
                    è occupata della ristrutturazione di edifici di fine '800
                    come l’Hotel Quirinale e l’Hotel Villa Linneo di Roma.{" "}
                  </p>
                  <p
                    style={{
                      
                      fontFamily: "GothamBook",
                      fontSize: "18px",
                    }}
                  >
                    <strong>Appalto Roma</strong> ha assunto un ruolo importante
                    nei numerosi interventi di ristrutturazione e miglioramento
                    sismico eseguiti a seguito del terremoto del 1997 in Umbria
                    e Marche, nel terremoto del 2000 della Valle dell’Aniene e
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
                    UFFICIO ROMA:{" "}
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
