// import React from "react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import logo from "../../img/starWarsLogo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="Navbar">
			<div className="Nabvar-left">
			<Link className="Navbar-link" to="/">
			<h1 className="Navbar-h1"><img className="Navbar-img" src= {logo}/></h1>
			</Link>
			</div>
			<div className="Navbar-rigth">
				<Link to="/favoritesView">
			<button className="Navbar-btn">Favorites ({store.favorites.length})</button>
				</Link>
			</div>
		</nav>
	);
};
