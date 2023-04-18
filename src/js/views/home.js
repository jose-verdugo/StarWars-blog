import React, { useState, useEffect } from "react";
import "../../styles/home.css";

export const Home = () => {
	const  [people, setPeople] = useState(null)
	const  [planets, setPlanets] = useState(null)
	const  [vehicles, setVehicles] = useState(null)
	const  [peoplePage, setPeoplePage] = useState(1)
	const  [planetsPage, setPlanetsPage] = useState(1)
	const  [vehiclesPage, setVehiclesPage] = useState(1)

	const urlPeople = `https://www.swapi.tech/api/people?page=${peoplePage}&limit=10`
	const urlPlanets =  `https://www.swapi.tech/api/planets?page=${planetsPage}&limit=10`
	const urlVehicles =  `https://www.swapi.tech/api/vehicles?page=${vehiclesPage}&limit=10`
	const getPeople = async () =>{
		const response = await fetch(urlPeople)
		const data = await response.json()
		

		const promises = data.results.map(async el =>{
			const response = await fetch(el.url)
			const data = await response.json()
				return data.result; 
		})
	
		const results = await Promise.all(promises);
		setPeople(results);
	}

	const getPlanets = async () =>{
		const response = await fetch(urlPlanets)
		const data = await response.json()
		console.log(data.results);

		const promises = data.results.map(async el =>{
			const response = await fetch(el.url)
			const data = await response.json()
				return data.result; 
		})
	
		const results = await Promise.all(promises);
		setPlanets(results);
	}
	const getVehicles = async () =>{
		const response = await fetch(urlVehicles)
		const data = await response.json()
		console.log(data.results);

		const promises = data.results.map(async el =>{
			const response = await fetch(el.url)
			const data = await response.json()
				return data.result; 
		})
	
		const results = await Promise.all(promises);
		setVehicles(results);
	}


	useEffect(() =>{
		getPeople()
		
	},[peoplePage])
	
	useEffect(() =>{
		getPlanets()
	},[planetsPage])
	
	useEffect(() =>{
		getVehicles()
	},[vehiclesPage])

	return(
		<div className="text-center mt-5">
			<h1>Star Wars Blog</h1>
			<h2>Characters</h2>
			{
      people !== null ? (
        people.map((person) => (
          <p key={person.uid}>{person.properties.name}</p>
        ))
      ) : ("Cargando...")
    }
	<button onClick={() => setPeoplePage(peoplePage + 1)}>Next Page</button>
	<h2>Planets</h2>
	{
      planets !== null ? (
        planets.map((planet) => (
          <p key={planet.uid}>{planet.properties.name}</p>
        ))
      ) : ("Cargando...")
    }
	<button onClick={() => setPlanetsPage(planetsPage + 1)}>Next Page</button>
	<h2>Vehicles</h2>
	{
      vehicles !== null ? (
        vehicles.map((vehicle) => (
          <p key={vehicle.uid}>{vehicle.properties.name}</p>
        ))
      ) : ("Cargando...")
    }
	<button onClick={() => setVehiclesPage(vehiclesPage + 1)}>Next Page</button>
		</div>
	)
}


//person.result.properties.name
//https://starwars-visualguide.com/assets/img/characters/