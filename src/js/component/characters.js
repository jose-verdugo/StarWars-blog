import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { TailSpin } from "react-loader-spinner";

export const Character = () => {
  const [people, setPeople] = useState(null);
  const [peoplePage, setPeoplePage] = useState(1);
  const { store, actions } = useContext(Context);

  const urlPeople = `https://www.swapi.tech/api/people?page=${peoplePage}&limit=5`;

  const getPeople = async () => {
    const response = await fetch(urlPeople);
    const data = await response.json();

    const promises = data.results.map(async (el) => {
      const response = await fetch(el.url);
      const data = await response.json();
      return data.result;
    });

    const results = await Promise.all(promises);
    setPeople(results);
  };

  useEffect(() => {
    getPeople();
  }, [peoplePage]);
  

  return (
    <section className="Section">
      <h2 className="Section-title">Characters</h2>
      <main className="Wrapper">
        {people !== null ? (
          people.map((person) => (
            <div className="Card" key={person.uid}>
              <div className="Card-left">
                <img
                  className="Card-img"
                  src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                  alt={person.properties.name}
                />
              </div>
              <div className="Card-rigth">
                <h3 className="Card-name">{person.properties.name}</h3>
                <ul className="Card-ul">
                  <li className="Card-li">
                    <b>Gender</b>: {person.properties.gender}
                  </li>
                  <li className="Card-li">
                    <b>Hair Color</b>: {person.properties.hair_color}
                  </li>
                  <li className="Card-li">
                    <b>Eye Color</b>: {person.properties.eye_color}
                  </li>
                </ul>
                <div className="Card-buttons">
                  <Link to={`/characterView${person.uid}`}>
                    <button className="Card-btn">Learn More!</button>
                  </Link>
                  <svg
                    className="Card-like"
                    onClick={() =>{
                      actions.selectId(person);
                      actions.addFavorite();
                    }}
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
        {peoplePage > 1 ? (
          <button
            className="Card-page"
            onClick={() => setPeoplePage(peoplePage - 1)}
          >
            Previous Page
          </button>
        ) : null}
        <button
          className="Card-page"
          onClick={() => setPeoplePage(peoplePage + 1)}
        >
          Next Page
        </button>
      </footer>
    </section>
  );
};
