import React from "react";



//create your first component
const Jumbotron = () => {
	return (
	<div className="jumbotron jumbotron-fluid m-5  bg-light" style={{padding:'10PX'}}>
		<h1 className="display-4">A Warm Welcome!</h1>
		<p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto totam laudantium ipsa, a non est esse nemo consectetur illum quaerat voluptas vel exercitationem eos atque iste beatae itaque ab rerum enim velit?</p>
		<a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Call To Action</a>
		</div>
)};

export default Jumbotron
