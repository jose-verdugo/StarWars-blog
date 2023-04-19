import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Character } from "../component/character";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	
	return(
		<>
	<h1>Star Wars Blog</h1>
	<Character/>
	<Planets/>
	<Vehicles/>
		</>
	)
}

//https://starwars-visualguide.com/assets/img/characters/