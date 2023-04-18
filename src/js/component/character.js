import React, { useState, useEffect } from "react";
import "../../styles/card.css";
import { TailSpin } from 'react-loader-spinner';

export const Character = () => {
  const [people, setPeople] = useState(null);
  const [peoplePage, setPeoplePage] = useState(1);

  const urlPeople = `https://www.swapi.tech/api/people?page=${peoplePage}&limit=10`;

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
    <>
      <h2>Characters</h2>
      <div className="Wrapper">
        {people !== null
          ? people.map((person) =>
            <div className="Card" key={person.uid}>
              <h3 className="Card-name">{person.properties.name}</h3>
              <ul className="Card-ul">
                <li className="Card-li">Gender: {person.properties.gender}</li>
                <li className="Card-li">Hair Color: {person.properties.hair_color}</li>
                <li className="Card-li">Eye Color: {person.properties.eye_color}</li>
              </ul>
            </div>
          )
          : <TailSpin
              height="80"
              width="80"
              color="#000000"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
        }
      </div>
      <button onClick={() => setPeoplePage(peoplePage + 1)}>Next Page</button>
    </>
  );
};
