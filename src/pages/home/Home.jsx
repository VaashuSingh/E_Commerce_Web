import Layout from "../../components/layout/Layout";
import HeroSection from "./HeroSection";
import FilterSection from "./FilterSection";
import CollectionSection from "../products/collectionSection";
import CarouselSection from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <Layout>
      <CarouselSection />
      <HeroSection />
      <FilterSection />
      <CollectionSection />
    </Layout>
  );
};

export default Home;
