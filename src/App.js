import AreaOfTriangle from "./Components/AreaOfTriangle";
import Hypotenuse from "./Components/Hypotenuse";
import IsTriangle from "./Components/IsTriangle";
import Navbar from "./Components/Navbar";
import Quizes from "./Components/Quizes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <IsTriangle />
          </Route>
          <Route path="/quizes">
            <Quizes />
          </Route>
          <Route path="/triangleArea">
            <AreaOfTriangle />
          </Route>
          <Route path="/hypotensue">
            <Hypotenuse />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
