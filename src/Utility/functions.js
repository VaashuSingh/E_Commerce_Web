import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cartSlice";

const getStyles = (mode) => ({
  backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
  color: mode === "dark" ? "white" : "",
});

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});

export { getStyles, store };
