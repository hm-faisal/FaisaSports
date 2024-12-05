import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "./Carousel";
import Category from "./Category";
import Partner from "./Partner";
import Product from "./Product";
import UserHelpDesk from "./UserHelpDesk";

const Home = () => {
  const [lightTheme, setLightTheme] = useState(true);
  console.log(lightTheme);
  return (
    <div data-theme={lightTheme ? "light" : "dark"}>
      <Header setLightTheme={setLightTheme} lightTheme={lightTheme} />
      <div className="flex justify-center item-center min-h-screen flex-col">
        <Carousel />
        <Category />
        <Product />
        <Partner />
        <UserHelpDesk />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
