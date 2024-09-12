import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <section
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('./img/bg/contact.jpg')" }}
      >
        <Navbar />
      </section>
      <div className="container mx-auto mt-10 mb-10">
        <h1 className="mt-5 font-bold text-6xl text-center">Contact</h1>

        <div className="flex flex-wrap justify-around ">
          <ul className="text-2xl leading-10">
            <h1 className="text-4xl font-bold text-red-600 mt-10 mb-3">
              ช่องทางการติดต่อ
            </h1>
            <li>• ขายส่งอุปกรณ์กีฬา</li>
            <li>• เว็บไซต์ขายส่งอุปกรณ์กีฬาดอทคอม</li>
            <li>• 90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม 73000</li>
            <li>• มือถือ : 0870421267</li>
            <li>• อีเมล: footballsport@gmail.com</li>
            <li>• Line ID: @footballsport</li>
          </ul>
          <div className="img">
            <img className="w-96" src="./img/contact/contact.png" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
