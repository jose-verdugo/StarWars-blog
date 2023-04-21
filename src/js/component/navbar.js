import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import logo from "../../img/starWarsLogo.png"

export const Navbar = () => {
	return (
		<nav className="Navbar">
			<Link className="Navbar-link" to="/">
			<h1 className="Navbar-h1"><img className="Navbar-img" src= {logo}/></h1>
			</Link>
			<div className="ml-auto">
			</div>
		</nav>
	);
};
