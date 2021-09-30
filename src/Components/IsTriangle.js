import { useState } from "react";
import isTriangleImg from "../images/isTriangle.png";

const IsTriangle = () => {
  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [angleThree, setAngleThree] = useState(0);

  const [triangleStatus, setTriangleStatus] = useState("");

  const checkTriangle = (e) => {
    e.preventDefault();

    if (angleOne > 0 && angleTwo > 0 && angleThree > 0) {
      const sumOfAngle =
        parseInt(angleOne) + parseInt(angleTwo) + parseInt(angleThree);
      console.log(sumOfAngle);

      if (sumOfAngle === 180) {
        setTriangleStatus("Yes you thought right these angles form a Triangle");
      } else {
        setTriangleStatus(
          "Sorry you need to think again, these angles does not form a triangle"
        );
      }
    } else {
      setTriangleStatus("All angles should be Greater than 0");
    }
  };

  return (
    <div className="isTriangle boxInput">
      <h2>Check if the Angles you thought forms a Triangle or not</h2>
      <img class="triangleImages2" src={isTriangleImg} alt="" height="100px" />
      <form action="">
        <h3>Enter Angle One</h3>
        <input type="number" onChange={(e) => setAngleOne(e.target.value)} />
        <h3>Enter Angle two</h3>
        <input type="number" onChange={(e) => setAngleTwo(e.target.value)} />
        <h3>Enter Angle three</h3>
        <input type="number" onChange={(e) => setAngleThree(e.target.value)} />

        <button className="submitButton" onClick={(e) => checkTriangle(e)}>
          Check if Triangle
        </button>
      </form>

      <h4>{triangleStatus}</h4>
    </div>
  );
};

export default IsTriangle;
