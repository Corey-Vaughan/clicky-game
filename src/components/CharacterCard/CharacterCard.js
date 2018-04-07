import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div onClick={() => props.clickCard(props)} className="card col-sm-2 p-2 m-4">
    <img className="card-img-top" src={props.image} alt={props.name}/>
  </div>
);

export default CharacterCard;