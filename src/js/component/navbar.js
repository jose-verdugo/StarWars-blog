import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="Navbar">
			<Link className="Navbar-link" to="/">
			<h1 className="Navbar-h1">Star Wars Blog</h1>
			</Link>
			<div className="ml-auto">
			</div>
		</nav>
	);
};
