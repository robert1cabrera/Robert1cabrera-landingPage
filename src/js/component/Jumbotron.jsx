import React from "react";
import { LandingPage } from "./LandingPage";


//create your first component
const Jumbotron = () => {
	return (
	<div className="jumbotron m-5">
		<h1 className="display-4">Welcome to react</h1>
		<p className="lead">React is the most popular rendering library in the world</p>
		<a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Go to the official website</a>
		</div>
)};

export default Jumbotron
