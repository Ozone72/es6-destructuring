import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
// honda destructured data
const { coloursByPopularity: hondaColors, speedStats: hondaSpeed } = honda;
const [hondaTopColour] = hondaColors;
const { topSpeed: hondaTopSpeed } = hondaSpeed;
// tesla destructured data
const { coloursByPopularity: teslaColors, speedStats: teslaSpeed } = tesla;
const [teslaTopColour] = teslaColors;
const { topSpeed: teslaTopSpeed } = teslaSpeed;

ReactDOM.render(
  <table>
    <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
