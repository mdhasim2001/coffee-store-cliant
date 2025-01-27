import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { VscCoffee } from "react-icons/vsc";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

export const CoffeeProduct = () => {
  const coffeesDataLoad = useLoaderData();
  const [coffeesData, setCoffeesData] = useState(coffeesDataLoad);

  const hendleCoffeeEdit = (coffeeId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-ten-ochre.vercel.app/coffees/${coffeeId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffeesData.filter(
                (coffee) => coffee._id !== coffeeId
              );
              setCoffeesData(remaining);
              Swal.fire({
                title: "Coffee Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
              className="h-[23vh] w-full col-span-2"
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
                <button
                  title="Viwe"
                  className="p-1 bg-[#D2B48C] text-white cursor-pointer"
                >
                  <FaEye />
                </button>
              </Link>
              <Link to={`/coffeeDetailsUpdate/${coffee._id}`}>
                <button
                  title="Edit"
                  className="my-2 p-1 bg-[#3C393B] text-white cursor-pointer"
                >
                  <MdEdit />
                </button>
              </Link>
              <button
                title="Delete"
                onClick={() => hendleCoffeeEdit(coffee._id)}
                className="p-1 bg-[#EA4744] text-white cursor-pointer"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
