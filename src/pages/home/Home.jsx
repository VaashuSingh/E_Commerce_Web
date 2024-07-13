import Layout from "../../components/layout/Layout";
import HeroSection from "./HeroSection";
import FilterSection from "./FilterSection";
import CollectionSection from "../products/CollectionSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FilterSection />
      <CollectionSection />
    </Layout>
  );
};

export default Home;
