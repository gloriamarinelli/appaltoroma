import React, { useState } from "react";
import "../../index.css";
import Image1 from "../images/prova1.png";
import Image from "../images/logo1.webp";
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
            color: "black",
            backgroundRepeat: "",
            backgroundPosition: "center",
            backgroundSize:"cover"
          }}
        >
          <span>
            <div className="container">
              <div className=" my-4 text-center">
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

                <hr className="text-dark"></hr>

                <div className="container">
                  <div class="row">
                    <div class="col"></div>
                    <div
                      class="col-5"
                      style={{                        
                        color:"black"                       
                      }}
                    >
                      <h5>
                        {" "}
                        Tel. Ufficio Roma:
                        <strong
                          style={{
                            fontSize: "30px",
                            fontFamily: "GothamBold",
                           color:"black"
                          }}
                        >
                          {" "}
                          0669278528
                        </strong>
                      </h5>
                      <h5>
                        {" "}
                        Email:
                        <strong
                          style={{
                            fontSize: "20px",
                            fontFamily: "GothamBold",
                            color:"black"
                          }}
                        >
                          {" "}
                          amministrazione.appaltoroma@gmail.com
                        </strong>{" "}
                      </h5>

                      <h5>
                        {" "}
                        Web:
                        <strong
                          style={{
                            fontSize: "30px",
                            color:"black",
                            fontFamily: "GothamBold",
                            
                          }}
                        >
                          {" "}
                          www.appaltoroma.it
                        </strong>{" "}
                      </h5>

                      <h5>
                        {" "}
                        Partita IVA:
                        <strong
                          style={{
                            fontSize: "30px",
                            fontFamily: "GothamBold",
                            color:"black"
                          }}
                        >
                          {" "}
                          11908371005
                        </strong>{" "}
                      </h5>
                      <div
                        className="mt-3"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <LazyLoadImage
                          src={Image}
                          alt="Chi siamo Appalto Roma"
                          height="100px"
                        />
                      </div>
                    </div>
                    <div class="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-dark"></hr>
            <div className="copyright py-2 text-center text-black">
              <div className="container">
                <small style={{ fontFamily: "GothamBook" }}>
                  &copy; Copyright 2023 | AppaltoRoma by{" "}
                  <a                    
                    style={{
                      textDecoration: "none",
                      color: "blue",
                    }}
                    href="https://github.com/gloriamarinelli"
                  >
                    GloriaMarinelli </a>{" "} | All Rights Reserved
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
            color: "black",
            backgroundRepeat: "repeat",
          }}
        >
          <span>
            <div className="container">
              <div className="my-4 text-center">
                <div className="py-3">
                  <h5 style={{ color: "#34aadc", fontFamily: "GothamBold" }}>
                    INTERVENTO DI MANUTENZIONE DELLE FACCIATE E DEL CORNICIONE
                    DELL'EDIFICIO
                  </h5>
                  <h1 style={{ allign: "center", fontFamily: "GothamBold" }}>
                    INTERVENTI DI RECUPERO EDILIZIO E EVENTI SISMICI
                  </h1>                  
                </div>
                <hr className="text-dark"></hr>

                <div className="container">
                  <div class="row">
                    <div class="col"></div>
                    <div
                      class="col-10"
                      style={{
                        textAlign: "left",
                        color: "black",
                        
                      }}
                    >
                      <h6>
                        {" "}
                        Tel. Ufficio Roma:
                        <strong
                          style={{
                            fontSize: "15px",
                            fontFamily: "GothamBold",
                            color: "black",
                          }}
                        >
                          {" "}
                          0669278528
                        </strong>
                      </h6>
                      <h6>
                        {" "}
                        Email:
                        <strong
                          style={{
                            fontSize: "10px",
                            fontFamily: "GothamBold",
                            color: "black",
                          }}
                        >
                          {" "}
                          amministrazione.appaltoroma@gmail.com
                        </strong>{" "}
                      </h6>

                      <h6>
                        {" "}
                        Web:
                        <strong
                          style={{
                            fontSize: "15px",
                            fontFamily: "GothamBold",
                            color: "black",
                          }}
                        >
                          {" "}
                          www.appaltoroma.it
                        </strong>{" "}
                      </h6>

                      <h6>
                        {" "}
                        Partita IVA:
                        <strong
                          style={{
                            fontSize: "15px",
                            fontFamily: "GothamBold",
                            color: "black",
                          }}
                        >
                          {" "}
                          11908371005
                        </strong>{" "}
                      </h6>
                      <div
                        className="mt-3 mb-3"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <LazyLoadImage
                          src={Image}
                          alt="Chi siamo Appalto Roma"
                          height="80px"
                        />
                      </div>
                    </div>
                    <div class="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-dark"></hr>
            <div className="copyright py-4 text-center text-dark">
              <div className="container">
                <small style={{ fontFamily: "GothamBook" }}>
                  &copy; Copyright 2023 | AppaltoRoma by{" "}
                  <a                    
                    style={{
                      textDecoration: "none",
                      color: "blue",
                    }}
                    href="https://github.com/gloriamarinelli"
                  >
                    GloriaMarinelli
                  </a>{" "}
                  | All Rights Reserved
                </small>
              </div>
            </div>
          </span>
        </footer>
      </>
    );
  }
}
