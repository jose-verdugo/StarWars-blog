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

  return (
    <div className="Section">
      <h2 className="Section-title">Vehicles</h2>
      <main className="Wrapper">
        {vehicles !== null ? (
          vehicles.map((vehicle) => (
            <div className="Card" key={vehicle.uid}>
              <img className="Card-img" src="#" alt="" />
              <h3 className="Card-name">{vehicle.properties.name}</h3>
              <ul className="Card-ul">
                <li className="Card-li">Model: {vehicle.properties.model}</li>
                <li className="Card-li">
                  Vehicle Class: {vehicle.properties.vehicle_class}
                </li>
                <li className="Card-li">
                  Manufacturer: {vehicle.properties.manufacturer}
                </li>
              </ul>
              <Link to={`/vehiclesView${vehicle.uid}`}>
                <button className="Card-btn">Learn More!</button>
              </Link>
              <svg
                className="Card-like"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
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
