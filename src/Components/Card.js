import React from "react";

const styling = {
  width: "18rem"
};

function Card(props) {
  //console.log(props);
  return (
    <div class="card" style={styling}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wR3ydLmSOgF2_TFcJ_Utx0sH4Nygyu3hvw&usqp=CAU"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">
          {props.data.school_name}
          {props.data.school_dbn}
          {props.data.program_code}
          {props.data.selection_criteria}
        </p>
      </div>
    </div>
  );
}

export default Card;
