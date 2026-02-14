import React from "react";

export default function Hero({ title, description, buttonText }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      {buttonText && <button className="btn">{buttonText}</button>}
    </section>
  );
}
