import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Admin from "./pages/admin/Admin";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import AllProducts from "./components/products/allprod";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exect path="/dashboard" element={<Admin />} />
          <Route exect path="/order" element={<Order />} />
          <Route exect path="/cart" element={<Cart />} />
          <Route exect path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
