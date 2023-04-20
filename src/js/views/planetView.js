import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const data = await response.json();
      console.log(data);
      console.log(id);
      setPlanet(data);
    };
    getPlanet();
  }, [id]);

  return (
   
    <div className="Details">
      {planet !== null ?(
          <>
        <div className="Details-card">
          <div className="Details-left">
          <img className="Details-img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={planet.result.properties.name}/>
          </div>
          <div className="Details-rigth">
          <h1 className="Details-name">{planet.result.properties.name}</h1>
          <p className="Details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam erat. Praesent posuere lacinia lacus, sagittis bibendum dui bibendum gravida. Cras egestas massa vitae elit vulputate, sit amet ullamcorper ipsum accumsan. Phasellus quam lectus, molestie vitae felis non, sollicitudin malesuada odio. Quisque eu facilisis nibh, nec tempor sem. Nunc luctus elit at eros blandit lacinia.</p>
          <ul className="Details-ul">
            <li className="Details-li"><b>Diameter</b>: {planet.result.properties.diameter}</li>
            <li className="Details-li"><b>Rotation period</b>: {planet.result.properties.rotation_period}</li>
            <li className="Details-li"><b>Orbital period</b>: {planet.result.properties.orbital_period}</li>
            <li className="Details-li"><b>Gravity</b>: {planet.result.properties.gravity}</li>
            <li className="Details-li"><b>Population</b>: {planet.result.properties.population}</li>
            <li className="Details-li"><b>CLimate</b>: {planet.result.properties.climate}</li>
            <li className="Details-li"><b>Terrain</b>: {planet.result.properties.terrain}</li>
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
