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
    <>
      {vehicle !== null ?(
        <div>
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt={vehicle.result.properties.name}/>
          <h1>{vehicle.result.properties.name}</h1>
          <Link to={`/`}>
            <button>Go back</button>
          </Link>
        </div>
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
    </>
  );
};
