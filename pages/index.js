import React from "react";
import Cards from "../components/view/home/Cards";
import Parallex from "../components/view/home/Parallex";
import Registration from "../components/view/home/Registration";

const Home = () => {
  return (
    <div className="relative">
      <Parallex />
      <Cards />
      <Registration />
    </div>
  );
};

export default Home;
