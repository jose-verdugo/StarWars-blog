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
    <>
      {planet !== null ?(
        <div>
          <h1>{planet.result.properties.name}</h1>
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
