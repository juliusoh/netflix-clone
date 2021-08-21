import React from "react";
import "./Home.scss";
import NavBar from "../Components/NavBar/NavBar";
import Featured from "../Components/Featured/Featured";
import List from "../Components/List/List";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
