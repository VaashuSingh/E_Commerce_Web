import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import AllProducts from "./components/products/allprod";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Blankpage from "./pages/blank/Blankpage";
import Dashboard from "./pages/admin/dashboard/dashboard";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exect path="/dashboard" element={<Dashboard />} />
          <Route exect path="/order" element={<Order />} />
          <Route exect path="/cart" element={<Cart />} />
          <Route exect path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exec path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<Blankpage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
