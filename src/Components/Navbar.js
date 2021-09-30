import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Tri@ngleMasti</h2>

      <div className="navLinks">
        <Link to="/">Is Triangle?</Link>
        <Link to="/quizes"> Quizes </Link>
        <Link to="/triangleArea"> Triangle Area</Link>
        <Link to="/hypotensue">Find Hypotenuse</Link>
      </div>
    </div>
  );
};

export default Navbar;
