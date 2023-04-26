import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { TailSpin } from "react-loader-spinner";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  const [vehiclesPage, setVehiclesPage] = useState(1);
  const { store, actions } = useContext(Context);

  const urlVehicles = `https://www.swapi.tech/api/vehicles?page=${vehiclesPage}&limit=5`;

  const getVehicles = async () => {
    const response = await fetch(urlVehicles);
    const data = await response.json();

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
    <section className="Section">
      <h2 className="Section-title">Vehicles</h2>
      <main className="Wrapper">
        {vehicles !== null ? (
          vehicles.map((vehicle) => (
            <div className="Card" key={vehicle.uid}>
              <div className="Card-left">
                <img
                  className="Card-img"
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  alt={vehicle.properties.name}
                />
              </div>
              <div className="Card-rigth">
                <h3 className="Card-name">{vehicle.properties.name}</h3>
                <ul className="Card-ul">
                  <li className="Card-li">
                    <b>Model</b>: {vehicle.properties.model}
                  </li>
                  <li className="Card-li">
                    <b>Vehicle class</b>: {vehicle.properties.vehicle_class}
                  </li>
                  <li className="Card-li">
                    <b>Manufacturer</b>: {vehicle.properties.manufacturer}
                  </li>
                </ul>
                <div className="Card-buttons">
                  <Link to={`/characterView${vehicle.uid}`}>
                    <button className="Card-btn">Learn More!</button>
                  </Link>
                  <svg
                    className="Card-like"
                    onClick={() => {
                      actions.selectId(vehicle);
                      actions.addFavorite();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
              </div>
            </div>
          ))
        ) : (
          <TailSpin
            height="80"
            width="80"
            color="#ffc107"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </main>
      <footer className="Section-footer">
        {vehiclesPage > 1 ? (
          <button
            className="Card-page"
            onClick={() => setVehiclesPage(vehiclesPage - 1)}
          >
            Previous Page
          </button>
        ) : null}
        <button
          className="Card-page"
          onClick={() => setVehiclesPage(vehiclesPage + 1)}
        >
          Next Page
        </button>
      </footer>
    </section>
  );
};

/////////////////////////////////

// const promises = data.results.map(async (el) => {
//   const response = await fetch(el.url);
//   const data = await response.json();
//   return { ...data.result, isFavorite: false };
// });

// const handleFavoriteClick = (uid) => {
//   const updatedVehicles = vehicles.map((vehicle) => {
//     if (vehicle.uid === uid) {
//       return { ...vehicle, isFavorite: !vehicle.isFavorite };
//     } else {
//       return vehicle;
//     }
//   });
//   setVehicles(updatedVehicles);
// };

// import React, { useContext, useState, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import "../../styles/card.css";
// import { TailSpin } from "react-loader-spinner";

// export const Vehicles = () => {
//   const [vehicles, setVehicles] = useState(null);
//   const [vehiclesPage, setVehiclesPage] = useState(1);
//   const { store, actions } = useContext(Context);

//   const urlVehicles = `https://www.swapi.tech/api/vehicles?page=${vehiclesPage}&limit=5`;

//   const getVehicles = async () => {
//     const response = await fetch(urlVehicles);
//     const data = await response.json();
//     console.log(data.results);

//     const promises = data.results.map(async (el) => {
//       const response = await fetch(el.url);
//       const data = await response.json();
//       return { ...data.result, isFavorite: false };
//     });

//     const results = await Promise.all(promises);
//     setVehicles(results);
//   };

//   useEffect(() => {
//     getVehicles();
//   }, [vehiclesPage]);

//   const toggleFavorite = (uid) => {
//     const updatedVehicles = vehicles.map((vehicle) => {
//       if (vehicle.uid === uid) {
//         vehicle.isFavorite = !vehicle.isFavorite;
//       }
//       return vehicle;
//     });
//     setVehicles(updatedVehicles);
//   };

//   return (
//     <section className="Section">
//       <h2 className="Section-title">Vehicles</h2>
//       <main className="Wrapper">
//         {vehicles !== null ? (
//           vehicles.map((vehicle) => (
//             <div className="Card" key={vehicle.uid}>
//               <div className="Card-left">
//                 <img
//                   className="Card-img--vehicles"
//                   src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
//                   alt={vehicle.properties.name}
//                 />
//               </div>
//               <div className="Card-rigth">
//                 <h3 className="Card-name">{vehicle.properties.name}</h3>
//                 <ul className="Card-ul">
//                   <li className="Card-li">
//                     <b>Model</b>: {vehicle.properties.model}
//                   </li>
//                   <li className="Card-li">
//                     <b>Vehicle class</b>: {vehicle.properties.vehicle_class}
//                   </li>
//                   <li className="Card-li">
//                     <b>Manufacturer</b>: {vehicle.properties.manufacturer}
//                   </li>
//                 </ul>
//                 <div className="Card-buttons">
//                   <Link to={`/vehicleView${vehicle.uid}`}>
//                     <button className="Card-btn">Learn More!</button>
//                   </Link>
//                   {vehicle.isFavorite === false ? (
//                     <svg
//                       className="Card-like"
//                       onClick={() => {
//                         handleFavoriteClick(vehicle.uid);
//                         actions.selectId(vehicle);
//                         actions.addFavorite();
//                       }}
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
//                     </svg>
//                   ) : (
//                     <svg
//                     className="Card-like"
//                     onClick={() =>{
//                       toggleFavorite(vehicle.uid);
//                       handleFavoriteClick(vehicle.uid)
//                       actions.selectId(vehicle);
//                       actions.removeFavorite();
//                     }}
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
//                       />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <TailSpin
//             height="80"
//             width="80"
//             color="#000000"
//             ariaLabel="tail-spin-loading"
//             radius="1"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={true}
//           />
//         )}
//       </main>
//       <footer className="Section-footer">
//         {vehiclesPage > 1 ? (
//           <button
//             className="Card-page"
//             onClick={() => setVehiclesPage(vehiclesPage - 1)}
//           >
//             Previous Page
//           </button>
//         ) : null}
//         <button
//           className="Card-page"
//           onClick={() => setVehiclesPage(vehiclesPage + 1)}
//         >
//           Next Page
//         </button>
//       </footer>
//     </section>
//   );
// };
