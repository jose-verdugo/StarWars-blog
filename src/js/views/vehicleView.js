import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const getVehicle = async () => {
      const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
      const data = await response.json();
      console.log(data);
      console.log(id);
      setVehicle(data);
    };
    getVehicle();
  }, [id]);

  return (
    <div className="Details">
    {vehicle !== null ?(
        <>
      <div className="Details-card">
        <div className="Details-left">
        <img className="Details-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt={vehicle.result.properties.name}/>
        </div>
        <div className="Details-rigth">
        <h1 className="Details-name">{vehicle.result.properties.name}</h1>
        <p className="Details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam erat. Praesent posuere lacinia lacus, sagittis bibendum dui bibendum gravida. Cras egestas massa vitae elit vulputate, sit amet ullamcorper ipsum accumsan. Phasellus quam lectus, molestie vitae felis non, sollicitudin malesuada odio. Quisque eu facilisis nibh, nec tempor sem. Nunc luctus elit at eros blandit lacinia.</p>
        <ul className="Details-ul">
          <li className="Details-li"><b>Model</b>: {vehicle.result.properties.model}</li>
          <li className="Details-li"><b>Vehicle class</b>: {vehicle.result.properties.vehicle_class}</li>
          <li className="Details-li"><b>Manufacturer</b>: {vehicle.result.properties.manufacturer}</li>
          <li className="Details-li"><b>Cost in credits</b>: {vehicle.result.properties.cost_in_credits}</li>
          <li className="Details-li"><b>Length</b>: {vehicle.result.properties.length}</li>
          <li className="Details-li"><b>Crew</b>: {vehicle.result.properties.crew}</li>
          <li className="Details-li"><b>Passengers</b>: {vehicle.result.properties.passengers}</li>
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
