import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">Some quick example text for Card 1.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <p className="card-text">Some quick example text for Card 2.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card 3</h5>
            <p className="card-text">Some quick example text for Card 3.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card 4</h5>
            <p className="card-text">Some quick example text for Card 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;

