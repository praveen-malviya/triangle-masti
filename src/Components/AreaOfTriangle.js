import { useState } from "react";
import areaOfTriangle from "../images/areaOfTriangle.jpg";

const AreaOfTriangle = () => {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [triangleArea, setTriangleArea] = useState("");

  const calculateArea = (e) => {
    e.preventDefault();

    if (base > 0 && height > 0) {
      const area = 0.5 * (parseInt(base) * parseInt(height));
      setTriangleArea(" The area of Trianlge is" + area + "cm<sup>2</sup>");
    } else {
      setTriangleArea(" Triangle Base and Height should be Greater than 0");
    }
  };

  return (
    <div className="areaOfTriangle boxInput">
      <h2>Calculate Area Of Triangle</h2>

      <img
        className="triangleImages"
        src={areaOfTriangle}
        alt="Area Of Trianlge"
        height="100"
      />

      <form action="">
        <h3>Enter Base in cm </h3>
        <input type="number" onChange={(e) => setBase(e.target.value)} />
        <h3>Enter Height in cm</h3>
        <input type="number" onChange={(e) => setHeight(e.target.value)} />

        <button className="submitButton" onClick={(e) => calculateArea(e)}>
          Calculate the Area
        </button>
      </form>

      <h4> {triangleArea}</h4>
    </div>
  );
};

export default AreaOfTriangle;
