import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      console.log(data);
      console.log(id);
      setCharacter(data);
    };
    getCharacter();
  }, [id]);

  return (
    <>
      {character !== null ?(
        <div>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={character.result.properties.name}/>
          <h1>{character.result.properties.name}</h1>
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
