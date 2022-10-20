import React from "react";
import { BsChevronRight } from "react-icons/bs";
const Home = () => {
  return (
    <div className="container">
      <div className="arrows">
        <BsChevronRight />
        <BsChevronRight />
      </div>
      <div className="flex_container">
      
      <h1 className="title">
        <span>BY</span>ME
        <sup> &reg;</sup>
      </h1>
      <p className="sub_title">order almost anything</p>
      </div>
    </div>
  );
};

export default Home;
