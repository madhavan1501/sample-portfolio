import React from "react";

const ProductSliderTwo = ({ sliderTwo, heading1 = "", heading2 = "" }) => {
  return (
    <div className="w-full  p-8 ">
      <div className="w-full bg-white shadow-2xl px-6 py-2 overflow-hidden ">
        <div className="flex  items-center">
          <h1 className="text-2xl font-semibold">{heading1}</h1>
          <a className="text-base text-blue-600 m-4 ">{heading2}</a>
        </div>
        <div className="flex space-x-2 overflow-x-scroll ">
          {sliderTwo.map((e, i) => (
            <div className="p-1 " key={i}>
              <div className="h-52 w-60 bg-slate-50 grid place-items-center">
                <img src={e} className="object-contain " alt="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderTwo;