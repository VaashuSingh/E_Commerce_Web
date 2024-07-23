import FilterSection from "../../components/filter/filter";
import Layout from "../../components/layout/Layout";
import CollectionSection from "../../components/products/collsec";
import HeroSection from "../../components/hero/HeroSection";
import CarouselSection from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <Layout>
      <CarouselSection />
      {/* <HeroSection /> */}
      <FilterSection />
      <CollectionSection />
    </Layout>
  );
};

export default Home;
