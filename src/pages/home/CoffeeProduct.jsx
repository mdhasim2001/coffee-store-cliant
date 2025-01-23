import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { VscCoffee } from "react-icons/vsc";

export const CoffeeProduct = () => {
  const coffeesData = useLoaderData();
  return (
    <div className="py-10 px-5 lg:px-[20%]">
      <div className="text-center">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-2xl">Our Popular Products</h1>
        <Link
          to="/addCoffee"
          className="flex items-center justify-center mt-3 rounded-lg text-white"
        >
          <button className="flex items-center font-bold cursor-pointer gap-2 text-[11px] py-1 px-2 bg-[#E3B577]">
            Add Coffee
            <VscCoffee />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {coffeesData.map((coffee) => (
          <div key={coffee._id} className="grid grid-cols-5 gap-5 bg-[#F5F4F1]">
            <img
              className="h-full w-full col-span-2"
              src={coffee.photoUrl}
              alt=""
            />
            <div className="col-span-2 flex flex-col justify-center">
              <p>
                <span className="font-bold">Name</span>: {coffee.name}
              </p>
              <p className="my-2">
                <span className="font-bold">Chef</span>: {coffee.chef}
              </p>
              <p>
                <span className="font-bold">Price</span>: {coffee.price}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link to={`/coffeeDetails/${coffee._id}`}>
                <button className="p-1 bg-[#D2B48C] text-white cursor-pointer">
                  <FaEye />
                </button>
              </Link>
              <button className="my-2 p-1 bg-[#3C393B] text-white cursor-pointer">
                <MdEdit />
              </button>
              <button className="p-1 bg-[#EA4744] text-white cursor-pointer">
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
