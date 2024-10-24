import React from "react";
import './card.css';

const Card = ({ url , title}) => {
  return (
    <div className="container" >
      <div className="image" style={{
        position : "absolute",
      backgroundImage: `url(${url})`, // Correct way to set the background image dynamically
      backgroundSize: 'cover',
      backgroundRepeat : 'no-repeat',        // Ensure the image covers the whole div
      backgroundPosition: 'center',
      filter: 'brightness(0.5) opacity(0.6)', 
      zIndex : "-1",
      borderRadius: "0.7rem" 
       // Center the image
    }}></div>
      <div className="box" >
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default Card;
