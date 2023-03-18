import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "100px",
          color: "red",
          fontFamily: "sans-serif",
        }}
      >
        ERROR
      </h1>
      <a href="/appaltoroma" style={{ textDecoration: "none" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "50px",
            color: "Black",
            backgroundColor: "#34aadc",
          }}
        >
          Torna alla Home
        </p>
      </a>
    </div>
  );
}
