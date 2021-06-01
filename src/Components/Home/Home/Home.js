import React from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Choose from "../Choose/Choose";
import Courses from "../Courses/Courses";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Trainee from "../Trainee/Trainee";
import Trainers from "../Trainers/Trainers";

const Home = () => {
  return (
    <section>
      <Header></Header>
      <About></About>
      <Courses></Courses>
      <Trainers></Trainers>
      <Blog></Blog>
      <Trainee></Trainee>
      <Footer></Footer>
    </section>
  );
};

export default Home;
