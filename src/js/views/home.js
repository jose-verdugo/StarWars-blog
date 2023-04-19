import React from "react";
import "../../styles/home.css";
import { Character } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	
	return(
		<>
	<Character/>
	<Planets/>
	<Vehicles/>
		</>
	)
}

//https://starwars-visualguide.com/assets/img/characters/