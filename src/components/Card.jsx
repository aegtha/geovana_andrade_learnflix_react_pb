import React from "react";

export default function Card({
  title,
  price,
  description,
  buttonText,
  showImage,
}) {
  return (
    <div className="card">
      {showImage && <div className="card-img"></div>}
      <div className="card-content">
        {price && <h3>{price}</h3>}
        {title && <h4>{title}</h4>}
        <p>{description}</p>
        <button className="btn">{buttonText}</button>
      </div>
    </div>
  );
}
