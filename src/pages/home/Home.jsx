import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";

const Home = () => {
  const context = useContext(MyContext);
  const { name, roll } = context;
  console.log("context", context);
  return (
    <Layout>
      <h1>Name : {name}</h1>
      <h1>Roll : {roll}</h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
      consectetur doloremque sunt dignissimos quas sit adipisci, numquam maiores
      neque animi facere magni voluptate. Eaque vitae explicabo reiciendis
      soluta, animi facilis.
    </Layout>
  );
};

export default Home;
