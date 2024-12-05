import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "./Carousel";
import Category from "./Category";
import Partner from "./Partner";
import Product from "./Product";
import UserHelpDesk from "./UserHelpDesk";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center item-center min-h-screen flex-col">
        <Carousel />
        <Category />
        <Product />
        <Partner />
        <UserHelpDesk />
      </div>
      <Footer />
    </>
  );
};

export default Home;
