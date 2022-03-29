import React from "react";

const styling = {
  width: "18rem"
};

function Card(props) {
  console.log(props);
  return (
    <div class="card" style={styling}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
