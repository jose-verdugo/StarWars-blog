import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { TailSpin } from "react-loader-spinner";

export const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [planetsPage, setPlanetsPage] = useState(1);

  const urlPlanets = `https://www.swapi.tech/api/planets?page=${planetsPage}&limit=5`;

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

  const handleLikeClick = (event) => {
    event.currentTarget.classList.toggle('Card-like--red');
  };

  return (
    <section className="Section">
      <h2 className="Section-title">Planets</h2>
      <main className="Wrapper">
      {planets !== null ? (
          planets.map((planet) => (
            <div className="Card" key={planet.uid}>
              <div className="Card-left">
             <img className="Card-img" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.properties.name} />
              </div>
              <div className="Card-rigth">
              <h3 className="Card-name">{planet.properties.name}</h3>
              <ul className="Card-ul">
                <li className="Card-li"><b>Population</b>: {planet.properties.population}</li>
                <li className="Card-li">
                 <b>Climate</b>: {planet.properties.climate}
                </li>
                <li className="Card-li">
                  <b>Terrain</b>: {planet.properties.terrain}
                </li>
              </ul>
              <div className="Card-buttons">
              <Link to={`/planetView${planet.uid}`}>
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
      {planetsPage > 1 ?(
          <button
          className="Card-page"
          onClick={() => setPlanetsPage(planetsPage - 1)}
        >
          Previous Page
        </button>
        ): null }
        <button
          className="Card-page"
          onClick={() => setPlanetsPage(planetsPage + 1)}
        >
          Next Page
        </button>
      </footer>
    </section>
  );
};
