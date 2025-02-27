import FilterSection from "../../components/filter/filter";
import Layout from "../../components/layout/Layout";
import ProductCollectionSection from "../../components/products/collsec";
// import HeroSection from "../../components/hero/HeroSection";
import CarouselSection from "../../components/carousel/Carousel";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className=" bg-gray-300 p-5" onClick={() => addCart()}>
          add
        </button>
        <button className=" bg-gray-300 p-5" onClick={() => deleteCart()}>
          del
        </button>
      </div>
      <CarouselSection />
      {/* <HeroSection /> */}
      <FilterSection />
      <ProductCollectionSection />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
