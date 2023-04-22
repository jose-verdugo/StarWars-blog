import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/favoritesView.css";
import { BsFillTrash3Fill } from "react-icons/bs";

export const FavoriteView = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1 className="Favorite-h1">Lista de Favoritos</h1>
      <div className="Favorite-wrapper">
        
      {store.favorites.map((fav, index) => {
  if(fav.description === "A person within the Star Wars universe"){
    console.log("character")
    return (
      <div className="Card-favorite" key={index}>
    <div className="Card-left">
      <img
        className="Card-img"
        src={`https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`}
        alt={fav.properties.name}
      />
    </div>
    <div className="Card-rigth">
      <h3 className="Card-name">{fav.properties.name}</h3>
      <ul className="Card-ul">
        <li className="Card-li">
          <b>Gender</b>: {fav.properties.gender}
        </li>
        <li className="Card-li">
          <b>Hair Color</b>: {fav.properties.hair_color}
        </li>
        <li className="Card-li">
          <b>Eye Color</b>: {fav.properties.eye_color}
        </li>
      </ul>
      <div className="Card-buttons">
        <Link to={`/characterView${fav.uid}`}>
          <button className="Card-btn">Learn More!</button>
        </Link>
        {/* <button className='Card-remove' onClick={() => actions.removeFavorite(fav)}><BsFillTrash3Fill /></button> */}
        <svg
        onClick={() => actions.removeFavorite(fav)}
          className="Card-remove"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg>
      </div>
    </div>
  </div>
    );
  }
   if(fav.description === "A planet."){
    return (  
<div className="Card-favorite" key={index}>
    <div className="Card-left">
      <img
        className="Card-img"
        src={`https://starwars-visualguide.com/assets/img/planets/${fav.uid}.jpg`}
        alt={fav.properties.name}
      />
    </div>
    <div className="Card-rigth">
      <h3 className="Card-name">{fav.properties.name}</h3>
      <ul className="Card-ul">
        <li className="Card-li">
        <b>Population</b>: {fav.properties.population}
        </li>
        <li className="Card-li">
        <b>Climate</b>: {fav.properties.climate}
        </li>
        <li className="Card-li">
        <b>Terrain</b>: {fav.properties.terrain}
        </li>
      </ul>
      <div className="Card-buttons">
        <Link to={`/characterView${fav.uid}`}>
          <button className="Card-btn">Learn More!</button>
        </Link>
        {/* <button className='Card-remove' onClick={() => actions.removeFavorite(fav)}><BsFillTrash3Fill /></button> */}
        <svg
        onClick={() => actions.removeFavorite(fav)}
          className="Card-remove"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg>
      </div>
    </div>
  </div>
    );
  }
  if(fav.description === "A vehicle"){
return(
  <div className="Card-favorite" key={index}>
      <div className="Card-left">
        <img
          className="Card-img"
          src={`https://starwars-visualguide.com/assets/img/vehicles/${fav.uid}.jpg`}
          alt={fav.properties.name}
        />
      </div>
      <div className="Card-rigth">
        <h3 className="Card-name">{fav.properties.name}</h3>
        <ul className="Card-ul">
          <li className="Card-li">
          <b>Model</b>: {fav.properties.model}
          </li>
          <li className="Card-li">
          <b>Vehicle class</b>: {fav.properties.vehicle_class}
          </li>
          <li className="Card-li">
          <b>Manufacturer</b>: {fav.properties.manufacturer}
          </li>
        </ul>
        <div className="Card-buttons">
          <Link to={`/characterView${fav.uid}`}>
            <button className="Card-btn">Learn More!</button>
          </Link>
          {/* <button className='Card-remove' onClick={() => actions.removeFavorite(fav)}><BsFillTrash3Fill /></button> */}
          <svg
          onClick={() => actions.removeFavorite(fav)}
            className="Card-remove"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </div>
      </div>
    </div>)
  }
})}
      </div>
    </>
  );
};


// description
// : 
// "A person within the Star Wars universe"


// description
// : 
// "A planet."


// description
// : 
// "A vehicle"

// {store.favorites.map((fav, index) => (
  // <div className="Card-favorite" key={index}>
  //   <div className="Card-left">
  //     <img
  //       className="Card-img"
  //       src={`https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`}
  //       alt={fav.properties.name}
  //     />
  //   </div>
  //   <div className="Card-rigth">
  //     <h3 className="Card-name">{fav.properties.name}</h3>
  //     <ul className="Card-ul">
  //       <li className="Card-li">
  //         <b>Gender</b>: {fav.properties.gender}
  //       </li>
  //       <li className="Card-li">
  //         <b>Hair Color</b>: {fav.properties.hair_color}
  //       </li>
  //       <li className="Card-li">
  //         <b>Eye Color</b>: {fav.properties.eye_color}
  //       </li>
  //     </ul>
  //     <div className="Card-buttons">
  //       <Link to={`/characterView${fav.uid}`}>
  //         <button className="Card-btn">Learn More!</button>
  //       </Link>
  //       {/* <button className='Card-remove' onClick={() => actions.removeFavorite(fav)}><BsFillTrash3Fill /></button> */}
  //       <svg
  //       onClick={() => actions.removeFavorite(fav)}
  //         className="Card-remove"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="16"
  //         height="16"
  //         fill="currentColor"
  //         viewBox="0 0 16 16"
  //       >
  //         <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
  //       </svg>
  //     </div>
  //   </div>
  // </div>
// ))}



// <div className="Card-favorite" key={index}>
//     <div className="Card-left">
//       <img
//         className="Card-img"
//         src={`https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`}
//         alt={fav.properties.name}
//       />
//     </div>
//     <div className="Card-rigth">
//       <h3 className="Card-name">{fav.properties.name}</h3>
//       <ul className="Card-ul">
//         <li className="Card-li">
//           <b>Gender</b>: {fav.properties.gender}
//         </li>
//         <li className="Card-li">
//           <b>Hair Color</b>: {fav.properties.hair_color}
//         </li>
//         <li className="Card-li">
//           <b>Eye Color</b>: {fav.properties.eye_color}
//         </li>
//       </ul>
//       <div className="Card-buttons">
//         <Link to={`/characterView${fav.uid}`}>
//           <button className="Card-btn">Learn More!</button>
//         </Link>
//         {/* <button className='Card-remove' onClick={() => actions.removeFavorite(fav)}><BsFillTrash3Fill /></button> */}
//         <svg
//         onClick={() => actions.removeFavorite(fav)}
//           className="Card-remove"
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           fill="currentColor"
//           viewBox="0 0 16 16"
//         >
//           <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
//         </svg>
//       </div>
//     </div>
//   </div>