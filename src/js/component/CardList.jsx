import React from "react";


const CardList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem enim quos suscipit!</p>
            <a href="#" className="btn btn-primary">Find out more!</a>
          </div>
        </div>
      </div>
      </div>
  );
};

export default CardList;

