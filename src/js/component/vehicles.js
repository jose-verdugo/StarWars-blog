import React, { useState, useEffect } from "react";
import { TailSpin } from  'react-loader-spinner'

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  const [vehiclesPage, setVehiclesPage] = useState(1);

  const urlVehicles = `https://www.swapi.tech/api/vehicles?page=${vehiclesPage}&limit=10`;

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
    <div>
      <h2>Vehicles</h2>
      {vehicles !== null
        ? vehicles.map((vehicle) => (
            <div className="Card" key={vehicle.uid}>
            <p>{vehicle.properties.name}</p>
            <div>
              <span>Model: {vehicle.properties.model}</span>
              <span>Vehicle Class: {vehicle.properties.vehicle_class}</span>
              <span>Manufacturer: {vehicle.properties.manufacturer}</span>
            </div>
          </div>
          ))
        : <TailSpin
        height="80"
        width="80"
        color="#000000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />}
      <button onClick={() => setVehiclesPage(vehiclesPage + 1)}>
        Next Page
      </button>
    </div>
  );
};
