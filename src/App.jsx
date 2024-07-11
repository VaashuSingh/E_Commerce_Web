import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom
import Home from "./pages/home/Home";
import MyState from "./context/data/myState";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Admin from "./pages/admin/Admin";
import AllProducts from "./pages/products/allproducts";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exect path="/dashboard" element={<Admin />} />
          <Route exect path="/order" element={<Order />} />
          <Route exect path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
