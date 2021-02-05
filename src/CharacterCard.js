import React from "react";
import "./CharacterCard.styles.css";

const CharacterCard = ({ name, nickname, occupation, image }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{nickname}</p>
          <p>{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
