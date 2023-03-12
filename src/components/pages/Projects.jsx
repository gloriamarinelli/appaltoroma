import React, { Component } from "react";
import Image from "../images/projects.png";
import "../../index.css";
import global from "../../resources/global.json";

export default function Bonus() {
  return (
    <>
      <div
        className="header-bonus"
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
            color:"white"
          }}
        >
          PROGETTI
        </h1>
      </div>
      <div style={{ textAlign: "justify", padding: "100px" }}>
        <h5
          style={{
            fontFamily: "GothamBook",
          }}
        >
          <p>
            Credito di Imposta del <strong>110%</strong>, Decreto Rilancio{" "}
            <strong>2020</strong>
          </p>

          <p>
            Disponibilità dell'Impresa <strong>APPALTO ROMA s.r.l.</strong> di
            concedere lo sconto su fattura pari all’intero importo dei lavori
            eseguiti dall’Impresa, riservando al Condominio la possibilità di
            ottenere il miglioramento energetico richiesto dalla normativa a{" "}
            <strong>COSTO ZERO</strong>.
          </p>
        </h5>
        <h5 style={{ color: "#34aadc" }}>
          Tale intervento sarà realizzato con le modalità che seguono:
        </h5>

        <h5
          style={{
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          “A” – Fase PROPEDEUTICA
        </h5>
        <ul style={{ fontSize: "20px" }}>
          <li>
            Delibera dell’Assemblea Condominiale con accettazione
            dell’intervento da parte di almeno il 30% dei millesimi condominiali
          </li>
          <li>
            Accettazione della cessione del Credito d’Imposta da parte di tutti
            i Condomini
          </li>
        </ul>

        <h5
          style={{
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          “B” – Fase 1: Fattibilità
        </h5>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Il processo inizia con l’elaborazione di una preliminare valutazione
          di fattibilità tecnico- economica (su preliminare sopralluogo dei
          nostri tecnici) che la redige, a titolo gratuito, al fine di mettere a
          conoscenza del Condominio il limite di capienza economica degli
          interventi ipotizzabili (importo massimo consentito dalla legge).
        </p>

        <h5
          style={{
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          “C” – Fase 2: Progetto di fattibilità e diagnosi{" "}
        </h5>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Successivamente, e sempre a titolo gratuito, la Appalto Roma s.r.l.
          redigerà il Progetto Di Fattibilità e la diagnosi dell’edificio con
          Valutazione Tecnica Economica Parametrica.{" "}
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Un vero e proprio Progetto esecutivo nel quale verranno illustrate le
          lavorazioni e il Quadro Tecnico Economico (QTE), comprensivo di tutti
          i costi amministrativi, fiscali, legali, tecnici, progettuali e del
          costo degli interventi edilizi.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Il QTE comprende anche le operazioni di collaudo, la direzione lavori,
          il corrispettivo del responsabile dei lavori, le analisi, i rilievi,
          tutti gli adempimenti fiscali e telematiciprevisti dalla normativa e
          l’assistenza fiscale e legale dall’avvio dell’iter sino alla sua
          positiva definizione.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Tutto ciò senza alcun costo a carico dei committenti ai quali spetterà
          solo l’onere di fornire quanto pià materiale possibile ai tecnici per
          facilitare l’attività di diagnostica dell’edificio e la verifica
          urbanistica delle unità immobiliari.
        </p>

        <h5
          style={{
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          “D” – Fase 3: Acquisizione permessi e Cantiere
        </h5>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Al completamento con esito positivo dei due livelli di fattibilita’,
          si procederà all’elaborazione di quanto necessario per l’acquisizione
          dei permessi urbanistici, l’eventuale occupazione di suolo pubblico e
          quanto necessario per l’ottenimento delle autorizzazioni Comunali,
          Provinciali, Regionali e delle Soprintendenze (nel caso di area
          vincolata) e dell’eventuale pratica per l’occupazione di suolo
          pubblico.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Come prevista dall’attutale legislazione e nei casi in cui ciò sia
          ritenuto possibile dal Progetti di Fattibilità, la Impresa Appalto
          Roma s.r.l. applicherà al condominio uno sconto pari al 100% dei costi
          previsti dal Quadro Tecnico Economico, cioè il 100% dell’intera
          operazione finanziaria.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Da tale sconto la Società acquisirà un credito d’imposta pari al 110%
          che sarà ceduto a istituti bancari di fiducia della Società
          Appaltoroma S.r.l.
        </p>

        <h5
          style={{
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          4 – Garanzie
        </h5>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          Per tutte le attività necessarie al corretto e completo sviluppo dei
          procedimenti e dei lavori, i Committenti potranno essere da garantiti
          da una una polizza assicurativa stipulata dai professionisti
          responsabili del processo e titolari delle asseverazioni, ognuno per
          propria competenza specifica, che solleverà il condominio ed ogni
          singolo condòmino da ogni rischio correlato all’accesso agli incentivi
          fiscali.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          La polizza è idonea a garantire i proprietari anche in caso di spese
          aggiuntive che a qualsiasi titolo dovessero essere richieste dagli
          organi di controllo quali Agenzia delle Entrate o ENEA, etc.. Ivi
          compresa ogni eventuale pretesa risarcitoria.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            color: "#34aadc",
          }}
        >
          L’aspetto legato alle lavorazioni edili e alle eventuali problematiche
          di cantiere, saranno poi garantite dall’assicurazione specifica
          dell’impresa appaltatrice e quelle delle sub- appaltatrici che
          potrebbero subentrare in cantiere.
        </p>
      </div>
    </>
  );
}
