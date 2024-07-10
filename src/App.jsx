import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom
import Home from "./pages/home/Home";
import MyState from "./context/data/myState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
