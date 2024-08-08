import FilterSection from "../../components/filter/filter";
import Layout from "../../components/layout/Layout";
import ProductCollectionSection from "../../components/products/collsec";
import HeroSection from "../../components/hero/HeroSection";
import CarouselSection from "../../components/carousel/Carousel";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
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
