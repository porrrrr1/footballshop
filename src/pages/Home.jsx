import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        className="flex flex-col min-h-screen bg-slate-600 text-white bg-center bg-cover bg-blend-overlay bg-fixed"
        style={{ backgroundImage: "url('./img/bg/home.png')" }}
      >
        <Navbar />
        <div className="flex-1 flex items-center">
          <div className="text-center mx-auto">
            <h1 className="text-6xl font-semibold">Welcome to my site!</h1>
            <p className="font-light text-3xl mt-5 mb-5">
              All football equipment here in one place.
            </p>
            <NavLink
              to="/product"
              className="w-fit text-2xl bg-gray-600 text-white py-3 px-6 rounded-full hover:bg-black transition duration-300 ease-in-out"
            >
              SHOP NOW
            </NavLink>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <h1 className="text-6xl font-bold text-center mt-10">สินค้าแนะนำ</h1>
        <hr className="mt-5 mb-5 border-t-2 border-gray-400" />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div className="max-w-sm bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer">
              <div className="flex justify-center">
                <img
                  src="./img/home/1.jpg"
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex  justify-between p-3">
                <h1>Manchester United</h1>
                <h1>4,600 THB</h1>
              </div>
            </div>
            <div className="max-w-sm bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer">
              <div className="flex justify-center">
                <img
                  src="./img/home/2.png"
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex  justify-between p-3">
                <h1>ADIDAS  Euro 24 Pro</h1>
                <h1>3,000 THB</h1>
              </div>
            </div>
            <div className="max-w-sm bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer">
              <div className="flex justify-center">
                <img
                  src="./img/home/3.png"
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex  justify-between p-3">
                <h1>ADIDAS Fingersave</h1>
                <h1>2,400 THB</h1>
              </div>
            </div>
            <div className="max-w-sm bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer">
              <div className="flex justify-center">
                <img
                  src="./img/home/4.png"
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex  justify-between p-3">
                <h1>กางเกงลิเวอร์พูลชุดเหย้า</h1>
                <h1>1700 THB</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
