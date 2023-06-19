import React from "react";
import { LandingPage } from "./LandingPage";


//create your first component
const NavBar = () => {
	return (
		<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
		<div className="container-fluid">
		  <a className="navbar-brand text-white" href="#">Navbar</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
			  <li className="nav-item">
				<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-white" href="#">Features</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-white" href="#">Pricing</a>
			  </li>
			  <li className="nav-item ">
				<a className="nav-link text-white disabled">Disabled</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
)};

export default NavBar 
