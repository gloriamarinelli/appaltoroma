import React, { useState } from "react";
import "../../index.css";
import Image1 from "../images/footer.webp";
import Image from "../images/logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";

export default function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <footer
          className="footer bg-dark"
          style={{
            backgroundImage: `url(${Image1})`,
            color: "white",
            backgroundRepeat: "repeat",
          }}
        >
          <span>
            <div className="container">
              <div className="py-5 my-4 text-center">
                <div className="py-5">
                  <h5 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                    INTERVENTO DI MANUTENZIONE DELLE FACCIATE E DEL CORNICIONE
                    DELL'EDIFICIO
                  </h5>
                  <h1 style={{ allign: "center", fontFamily: "GothamBold" }}>
                    INTERVENTI DI RECUPERO
                  </h1>
                  <h1 style={{ allign: "center", fontFamily: "GothamBold" }}>
                    EDILIZIO, EVENTI SISMICI
                  </h1>
                </div>
                <hr className="text-white"></hr>
                <div>
                  <h3
                    style={{
                      fontSize: "40px",
                      allign: "center",
                      fontFamily: "GothamBold",
                    }}
                  >
                    {" "}
                    📞0669278528
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "gold",
                      fontFamily: "GothamBold",
                    }}
                  >
                    Ufficio Roma
                  </p>
                  <h5 style={{ fontFamily: "GothamBook" }}>
                    amministrazione.appaltoroma@gmail.com
                  </h5>
                </div>

                <LazyLoadImage
                  src={Image}
                  alt="Chi siamo Appalto Roma"
                  height="100"
                />
              </div>
            </div>
            <hr className="text-white"></hr>
            <div className="copyright py-4 text-center text-white">
              <div className="container">
                <small style={{ fontFamily: "GothamBook" }}>
                  &copy; Copyright 2023 | appaltoroma.it | All Rights Reserved
                </small>
              </div>
            </div>
          </span>
        </footer>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <footer
          className="footer bg-dark"
          style={{
            backgroundImage: `url(${Image1})`,
            color: "white",
            backgroundRepeat: "repeat",
          }}
        >
          <span>
            <div className="container">
              <div className="py-5 my-4 text-center">
                <div className="py-5">
                  <h5 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                    INTERVENTO DI MANUTENZIONE DELLE FACCIATE E DEL CORNICIONE
                    DELL'EDIFICIO
                  </h5>
                  <h1 style={{ allign: "center", fontFamily: "GothamBold" }}>
                    INTERVENTI DI RECUPERO
                  </h1>
                  <h1 style={{ allign: "center", fontFamily: "GothamBold" }}>
                    EDILIZIO, EVENTI SISMICI
                  </h1>
                </div>
                <hr className="text-white"></hr>
                <div>
                  <h3
                    style={{
                      fontSize: "40px",
                      allign: "center",
                      fontFamily: "GothamBold",
                    }}
                  >
                    {" "}
                    📞06 8947 3105
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "gold",
                      fontFamily: "GothamBold",
                    }}
                  >
                    Ufficio Roma
                  </p>
                  <h5 style={{ fontFamily: "GothamBook", fontSize: "15px" }}>
                    Email: amministrazione.appaltoroma@gmail.com
                  </h5>
                </div>

                <LazyLoadImage
                  src={Image}
                  alt="Chi siamo Appalto Roma"
                  height="50"
                />
              </div>
            </div>
            <hr className="text-white"></hr>
            <div className="copyright py-4 text-center text-white">
              <div className="container">
                <small style={{ fontFamily: "GothamBook" }}>
                  &copy; Copyright 2023 | appaltoroma.it | All Rights Reserved
                </small>
              </div>
            </div>
          </span>
        </footer>
      </>
    );
  }
}
