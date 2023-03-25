import React from "react";
import Image from "../images/projects.webp";
import ProjectsCard from "../components/ProjectsCard";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";

import Image1 from "../images/condominio-via-barilatti.webp";
import Image2 from "../images/codominio-via-tolosa.webp";
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
import Image17 from "../images/braccianese.webp";

export default function Bonus() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
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

        <section className="articles">
          <ProjectsCard
            titolo="CONDOMINIO Via Barillatti – ROMA"
            immagine={Image1}
            descrizione="€	155.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate. Frontalini balconi e gocciolatoi.            Manutenzione copertura.
         "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Tolosa – ROMA EUR"
            immagine={Image2}
            descrizione="€	278.000,00"
            descrizione1="Rifacimento completo del sistema fognario e posizionato sul soffitto del locale autorimessa. Smantellamento e rifacimento delle coperture del piano autorimessa.
            Fognature e piazzali e parcheggi esterni.
         "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Alessandro Codivilla – ROMA"
            immagine={Image3}
            descrizione="€	450.000,00"
            descrizione1="			Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate. Ristrutturazione frontalini  e balconi.
            Manutenzione copertura.
      "
          />
          <ProjectsCard
            titolo="Braccianese - ROMA"
            immagine={Image17}
            descrizione="€	1.750.000,00"
            descrizione1="Costruzione n° 18  appartamenti con autorimessa "
          />
          <ProjectsCard
            titolo="EDIFICIO MONOFAMILIARE Via Passo Lombardo N° 126 – ROMA"
            immagine={Image4}
            descrizione="€	110.000,00"
            descrizione1="Cappotto interno controsoffittato e cappotto esterno con parete microventilata,            impianto di riscaldamento a pavimento con pompa di calore “idronico”,
            pannelli fotovoltaici e colonnine per adduzione elettrica per autoveicoli.      "
          />
          <ProjectsCard
            titolo="PIANSACCOCCIA 2 Via Enrico Tallone - ROMA"
            immagine={Image5}
            descrizione="-"
          />
          <ProjectsCard
            titolo="POLO TECNOLOGICO TIBURTINO Via Tiburtina - ROMA"
            immagine={Image6}
            descrizione="-"
          />
          <ProjectsCard
            titolo="CONDOMINIO Colle degli Abeti   Via Cardinale Luigi Traglia - ROMA"
            immagine={Image7}
            descrizione="€	660.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate. Rifacimento copertura e realizzazione di tetto rovescio e con pavimento flottante e rifacimento sistema fognario e piazzali esterni."
          />
          <ProjectsCard
            titolo="Casale Castellaccio - ROMA"
            immagine={Image8}
            descrizione="-"
          />
          <ProjectsCard
            titolo="Osteria del Curato - ROMA    "
            immagine={Image9}
            descrizione="€	2.450.000,00"
            descrizione1="Costruzione n° 24  appartamenti con autorimessa e negozi"
          />
          <ProjectsCard
            titolo="CONDOMINIO di Viale della Vittoria – Ostia Lido   -  ROMA"
            immagine={Image10}
            descrizione="€	145.000,00"
            descrizione1="Miglioramento SISMICO della struttura e creazione di corpi aggiunti in copertura. "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Guglielmo Massaia N° 39 - ROMA"
            immagine={Image12}
            descrizione="€	750.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate, 
            ristrutturazione fioriere e balconi e
            manutenzione copertura.
      "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Pio Foa’ N° 45 - ROMA"
            immagine={Image13}
            descrizione="€	175.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate.
            Frontalini balconi,
            rifacimento copertura,
            smantellamento pavimentazione esterna e suolo rifacimento.
        "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Cherso N° 59 – ROMA"
            immagine={Image14}
            descrizione="€	450.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate.
            Cappotto esterno, consolidamento tetto e successiva coibentazione ed impermeabilizzazione.            Consolidamento struttura muraria,
            sostituzione infissi esterni,
           abbattimento barriere architettoniche, ascensore e montascale.
        "
          />
          <ProjectsCard
            titolo="PALAZZO GRANDE - Corciano (PG)"
            immagine={Image15}
            descrizione="€	1.450.000,00"
            descrizione1="Miglioramento ANTISISMICO, ristrutturazione edilizia con cambio di destinazione d’uso da privato a recettivo.
            Sottofondazioni, consolidamento dei paramenti murari, degli orizzontamenti a volta ed in piano, incatenamenti,  intonaci, pavimenti, rivestimenti e finiture.
            "
          />
          <ProjectsCard
            titolo="CASTELLO DELL’OSCANO Torre Circolare del 1600 D.C. - Cenerente (PG) "
            immagine={Image16}
            descrizione="€	1.800.000,00 (intervento cofinanziato dal Ministero dei Beni Culturali) "
            descrizione1=" Ristrutturazione edilizia con cambio di destinazione d'uso da privato a recettivo. Sottofondazioni, consolidamento dei paramenti murari e degli orizzontamenti, intonaci, pavimenti, rivestimenti, finiture, impianto elettrico e idrico sanitario, riscaldamento, ascensore, ecc.. .           "
          />
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
          className="header-projects"
          style={{
            backgroundImage: `url(${Image})`,
            bacjgroundSize: "cover",
            padding: "10px",
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
            PROGETTI
          </h1>
        </div>

        <section className="articles">
          <ProjectsCard
            titolo="CONDOMINIO Via Barillatti – ROMA"
            immagine={Image1}
            descrizione="€	155.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate. Frontalini balconi e gocciolatoi.            Manutenzione copertura.
         "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Tolosa – ROMA EUR"
            immagine={Image2}
            descrizione="€	278.000,00"
            descrizione1="Rifacimento completo del sistema fognario e posizionato sul soffitto del locale autorimessa. Smantellamento e rifacimento delle coperture del piano autorimessa.
            Fognature e piazzali e parcheggi esterni.
         "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Alessandro Codivilla – ROMA"
            immagine={Image3}
            descrizione="€	450.000,00"
            descrizione1="			Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate. Ristrutturazione frontalini  e balconi.
            Manutenzione copertura.
      "
          />
          <ProjectsCard
            titolo="Braccianese - ROMA"
            immagine={Image17}
            descrizione="€	1.750.000,00"
            descrizione1="Costruzione n° 18  appartamenti con autorimessa "
          />
          <ProjectsCard
            titolo="EDIFICIO MONOFAMILIARE Via Passo Lombardo N° 126 – ROMA"
            immagine={Image4}
            descrizione="€	110.000,00"
            descrizione1="Cappotto interno controsoffittato e cappotto esterno con parete microventilata,            impianto di riscaldamento a pavimento con pompa di calore “idronico”,
            pannelli fotovoltaici e colonnine per adduzione elettrica per autoveicoli.      "
          />
          <ProjectsCard
            titolo="PIANSACCOCCIA 2 Via Enrico Tallone - ROMA"
            immagine={Image5}
            descrizione="-"
          />
          <ProjectsCard
            titolo="POLO TECNOLOGICO TIBURTINO Via Tiburtina - ROMA"
            immagine={Image6}
            descrizione="-"
          />
          <ProjectsCard
            titolo="CONDOMINIO Colle degli Abeti   Via Cardinale Luigi Traglia - ROMA"
            immagine={Image7}
            descrizione="€	660.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate. Rifacimento copertura e realizzazione di tetto rovescio e con pavimento flottante e rifacimento sistema fognario e piazzali esterni."
          />
          <ProjectsCard
            titolo="Casale Castellaccio - ROMA"
            immagine={Image8}
            descrizione="-"
          />
          <ProjectsCard
            titolo="Osteria del Curato - ROMA    "
            immagine={Image9}
            descrizione="€	2.450.000,00"
            descrizione1="Costruzione n° 24  appartamenti con autorimessa e negozi"
          />
          <ProjectsCard
            titolo="CONDOMINIO di Viale della Vittoria – Ostia Lido   -  ROMA"
            immagine={Image10}
            descrizione="€	145.000,00"
            descrizione1="Miglioramento SISMICO della struttura e creazione di corpi aggiunti in copertura. "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Guglielmo Massaia N° 39 - ROMA"
            immagine={Image12}
            descrizione="€	750.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate, 
            ristrutturazione fioriere e balconi e
            manutenzione copertura.
      "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Pio Foa’ N° 45 - ROMA"
            immagine={Image13}
            descrizione="€	175.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate.
            Frontalini balconi,
            rifacimento copertura,
            smantellamento pavimentazione esterna e suolo rifacimento.
        "
          />
          <ProjectsCard
            titolo="CONDOMINIO Via Cherso N° 59 – ROMA"
            immagine={Image14}
            descrizione="€	450.000,00"
            descrizione1="Manutenzione delle facciate esterne con ristrutturazione delle parti ammalorate.
            Cappotto esterno, consolidamento tetto e successiva coibentazione ed impermeabilizzazione.            Consolidamento struttura muraria,
            sostituzione infissi esterni,
           abbattimento barriere architettoniche, ascensore e montascale.
        "
          />
          <ProjectsCard
            titolo="PALAZZO GRANDE - Corciano (PG)"
            immagine={Image15}
            descrizione="€	1.450.000,00"
            descrizione1="Miglioramento ANTISISMICO, ristrutturazione edilizia con cambio di destinazione d’uso da privato a recettivo.
            Sottofondazioni, consolidamento dei paramenti murari, degli orizzontamenti a volta ed in piano, incatenamenti,  intonaci, pavimenti, rivestimenti e finiture.
            "
          />
          <ProjectsCard
            titolo="CASTELLO DELL’OSCANO Torre Circolare del 1600 D.C. - Cenerente (PG) "
            immagine={Image16}
            descrizione="€	1.800.000,00 (intervento cofinanziato dal Ministero dei Beni Culturali) "
            descrizione1=" Ristrutturazione edilizia con cambio di destinazione d'uso da privato a recettivo. Sottofondazioni, consolidamento dei paramenti murari e degli orizzontamenti, intonaci, pavimenti, rivestimenti, finiture, impianto elettrico e idrico sanitario, riscaldamento, ascensore, ecc.. .           "
          />
        </section>
      </>
    );
  }
}
