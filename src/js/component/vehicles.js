import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { TailSpin } from "react-loader-spinner";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  const [vehiclesPage, setVehiclesPage] = useState(1);

  const urlVehicles = `https://www.swapi.tech/api/vehicles?page=${vehiclesPage}&limit=5`;

  const getVehicles = async () => {
    const response = await fetch(urlVehicles);
    const data = await response.json();
    console.log(data.results);

    const promises = data.results.map(async (el) => {
      const response = await fetch(el.url);
      const data = await response.json();
      return data.result;
    });

    const results = await Promise.all(promises);
    setVehicles(results);
  };

  useEffect(() => {
    getVehicles();
  }, [vehiclesPage]);

  const handleLikeClick = (event) => {
    event.currentTarget.classList.toggle('Card-like--red');
  };

  return (
    <div className="Section">
      <h2 className="Section-title">Vehicles</h2>
      <main className="Wrapper">
        {vehicles !== null ? (
          vehicles.map((vehicle) => (
            <div className="Card" key={vehicle.uid}>
              <div className="Card-left">
              <img className="Card-img--vehicles" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.properties.name}/>
              </div>
              <div className="Card-rigth">
              <h3 className="Card-name">{vehicle.properties.name}</h3>
              <ul className="Card-ul">
                <li className="Card-li"><b>Model</b>: {vehicle.properties.model}</li>
                <li className="Card-li">
                  <b>Vehicle class</b>: {vehicle.properties.vehicle_class}
                </li>
                <li className="Card-li">
                  <b>Manufacturer</b>: {vehicle.properties.manufacturer}
                </li>
              </ul>
              <div className="Card-buttons">
              <Link to={`/vehicleView${vehicle.uid}`}>
                <button className="Card-btn">Learn More!</button>
              </Link>
              <svg
                    className="Card-like"
                    onClick={handleLikeClick}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
              </div>
              </div>
            </div>
          ))
        ) : (
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
      </main>
      <footer className="Section-footer">
      {vehiclesPage > 1 ?(
          <button
          className="Card-page"
          onClick={() => setVehiclesPage(vehiclesPage - 1)}
        >
          Previous Page
        </button>
        ): null }
        <button
          className="Card-page"
          onClick={() => setVehiclesPage(vehiclesPage + 1)}
        >
          Next Page
        </button>
      </footer>
    </div>
  );
};
