import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import  "../../styles/details-card.css"

export const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      console.log(data);
      console.log(id);
      setCharacter(data);
    };
    getCharacter();
  }, [id]);

  return (
  
    <div className="Details">
      {character !== null ?(
          <>
        <div className="Details-card">
          <div className="Details-left">
          <img className="Details-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={character.result.properties.name}/>
          </div>
          <div className="Details-rigth">
          <h1 className="Details-name">{character.result.properties.name}</h1>
          <p className="Details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam erat. Praesent posuere lacinia lacus, sagittis bibendum dui bibendum gravida. Cras egestas massa vitae elit vulputate, sit amet ullamcorper ipsum accumsan. Phasellus quam lectus, molestie vitae felis non, sollicitudin malesuada odio. Quisque eu facilisis nibh, nec tempor sem. Nunc luctus elit at eros blandit lacinia. Nulla neque enim, auctor id lectus a, mollis ullamcorper lacus. Etiam rhoncus tempus tortor vel faucibus. Maecenas cursus fermentum dui eget eleifend. Suspendisse et enim id justo ullamcorper semper a non tortor. Etiam mattis lectus quis elit lacinia sodales.</p>
          <ul className="Details-ul">
            <li className="Details-li">Height: {character.result.properties.height}</li>
            <li className="Details-li">Mass: {character.result.properties.mass}</li>
            <li className="Details-li">Hair color: {character.result.properties.hair_color}</li>
            <li className="Details-li">Skin color: {character.result.properties.skin_color}</li>
            <li className="Details-li">Eye color: {character.result.properties.eye_color}</li>
            <li className="Details-li">Birth year: {character.result.properties.birth_year}</li>
            <li className="Details-li">Gender: {character.result.properties.gender}</li>
          </ul>
          </div>
        </div>
          <Link className="Details-link" to={`/`}>
            <button className="Details-btn">Go back</button>
          </Link>
          </>
      ): (
        <TailSpin
          height="80"
          width="80"
          color="#000000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </div>
  );
};
