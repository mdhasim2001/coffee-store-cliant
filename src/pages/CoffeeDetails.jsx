import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

export const CoffeeDetails = () => {
  const coffeeDetailsInfo = useLoaderData();
  const { name, chef, supplier, teste, category, details, price, photoUrl } =
    coffeeDetailsInfo;
  return (
    <div className="add_coffee_bg py-10 px-5 lg:px-[20%] bg-cover bg-center w-full bg-no-repeat">
      <div>
        <Link to="/">
          <button className="flex items-center gap-3 font-bold cursor-pointer">
            <IoMdArrowRoundBack />
            Back to home
          </button>
        </Link>
      </div>
      <div className="mt-5 bg-[#F4F3F0] p-10">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <img src={photoUrl} alt="" />
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-xl mb-2 font-extrabold underline">Niceties</h1>
            <h1>
              <span className="font-bold">Name: </span>
              {name}
            </h1>
            <h1>
              <span className="font-bold">Chef: </span>
              {chef}
            </h1>
            <h1>
              <span className="font-bold">Supplier: </span>
              {supplier}
            </h1>
            <h1>
              <span className="font-bold">Teste: </span>
              {teste}
            </h1>
            <h1>
              <span className="font-bold">Category: </span>
              {category}
            </h1>
            <h1>
              <span className="font-bold">Details: </span>
              {details}
            </h1>
            <h1>
              <span className="font-bold">Price: </span>
              {price}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
