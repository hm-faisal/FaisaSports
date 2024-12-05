import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "./Carousel";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center item-center min-h-screen flex-col">
        <Carousel />
        <Product />
      </div>
      <Footer />
    </>
  );
};

export default Home;
