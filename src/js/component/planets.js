import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

export const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [planetsPage, setPlanetsPage] = useState(1);

  const urlPlanets = `https://www.swapi.tech/api/planets?page=${planetsPage}&limit=10`;

  const getPlanets = async () => {
    const response = await fetch(urlPlanets);
    const data = await response.json();
    console.log(data.results);

    const promises = data.results.map(async (el) => {
      const response = await fetch(el.url);
      const data = await response.json();
      return data.result;
    });

    const results = await Promise.all(promises);
    setPlanets(results);
  };

  useEffect(() => {
    getPlanets();
  }, [planetsPage]);

  return (
    <div>
      <h2>Planets</h2>
      {planets !== null ? (
        planets.map((planet) => (
          <div key={planet.uid}>
            <h3>{planet.properties.name}</h3>
            <div>
              <span>Population: {planet.properties.population}</span>
              <span>Climate: {planet.properties.climate}</span>
              <span>Terrain: {planet.properties.terrain}</span>
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
      <button onClick={() => setPlanetsPage(planetsPage + 1)}>Next Page</button>
    </div>
  );
};
