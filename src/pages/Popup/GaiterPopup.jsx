import React from "react";

const GaiterPopup = ({ isOpen, onClose, item }) => {

  if (!isOpen || !item) return null;

  const content = Array.isArray(item.content) ? item.content : [];

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
    >
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        <div className="relative bg-slate-100 rounded-lg shadow">
          <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap justify-between items-center gap-5 p-6">
            <div className="img">
              <img className="w-[100rem] object-cover h-96 shadow-xl bg-white" src={`img/product/gaiter/${item.img}`} alt="" />
            </div>

            <div className="flex flex-col  p-4 md:p-5">
              <h3 className="text-3xl font-bold text-black">ชื่อสินค้า</h3>
              <h1>{item.name}</h1>
              <h1 className="text-3xl font-bold">รายละเอียดสินค้า</h1>
              <h1>{item.text}</h1>
              <h1 className="text-3xl font-bold">ไซส์</h1>
              <div className="flex gap-2">
                <p className="bg-white p-2 hover:bg-black hover:text-white cursor-pointer">
                  S
                </p>
                <p className="bg-white p-2 hover:bg-black hover:text-white cursor-pointer">
                  M
                </p>
                <p className="bg-white p-2 hover:bg-black hover:text-white cursor-pointer">
                  L
                </p>
                <p className="bg-white p-2 hover:bg-black hover:text-white cursor-pointer">
                  XL
                </p>
                <p className="bg-white p-2 hover:bg-black hover:text-white cursor-pointer">
                  XXL
                </p>
              </div>
              <h1 className="text-3xl font-bold">ราคา</h1>
              <h1 className="text-lg font-bold">{item.price} THB</h1>
            </div>
          </div>

          <div className="flex items-center p-4 md:p-5 ">
            <button
              type="button"
              className="text-white bg-green-900 hover:bg-green-600 p-3 rounded-lg w-full"
              onClick={onClose}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaiterPopup;
