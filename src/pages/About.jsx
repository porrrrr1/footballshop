import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <section
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('./img/bg/about.jpg')" }}
      >
        <Navbar />
      </section>
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex flex-wrap justify-around items-center">
          <div className="img">
            <img className="w-96" src="./img/about/about.png" alt="" />
          </div>

          <div className="w-[35rem] shadow-xl">
          <img className="w-full" src="./img/about/text.png" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
