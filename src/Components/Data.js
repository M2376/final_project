import React, { useState } from "react";
import Plot from "react-plotly.js";

function Product() {
  const sample = [
    {
      category: "M",
      values: [20, 100, 40, 80, 30],
      types: [
        "University Neighbrohood Highschool",
        "East Side Community School",
        "New Explorations",
        "The clinton School",
        "Bard High school"
      ]
    },
    {
      category: "B",
      values: [45, 121, 76, 12, 98],
      types: ["f", "g", "h", "i", "j"]
    },
    { category: "B2", values: [84, 23, 54, 51], types: ["k", "l", "m", "n"] }
  ];

  const [data, setData] = useState([]);

  function handleClick(e) {
    sample.forEach((each) => {
      if (each.category === e.target.id) {
        setData({ values: each.values, types: each.types });
      }
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleClick} id="M">
          Manhattan
        </button>
        <button onClick={handleClick} id="B">
          Bronx
        </button>
        <button onClick={handleClick} id="B2">
          Queens
        </button>
      </div>
      <Plot
        data={[
          {
            type: "bar",
            x: data.types,
            y: data.values
          }
        ]}
        layout={{ width: 800, height: 500, title: "Interactive Graph" }}
      />
    </div>
  );
}
export default Product;
