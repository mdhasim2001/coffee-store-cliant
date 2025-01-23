import { FaEye } from "react-icons/fa";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscCoffee } from "react-icons/vsc";

export const CoffeeProduct = () => {
  return (
    <div className="py-10 px-5 lg:px-[20%]">
      <div className="text-center">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-2xl">Our Popular Products</h1>
        <Link
          to="/addCoffee"
          className="flex items-center justify-center mt-3 rounded-lg text-white"
        >
          <button className="flex items-center gap-2 text-[11px] py-1 px-2 bg-[#E3B577]">
            Add Coffee
            <VscCoffee />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="flex items-center justify-center gap-5 bg-[#F5F4F1]">
          <img className="h-36" src={img1} alt="" />
          <div>
            <p>
              <span className="font-bold">Name</span>: Americano Coffee
            </p>
            <p className="my-2">
              <span className="font-bold">Chef</span>: Mr. Matin Paul
            </p>
            <p>
              <span className="font-bold">Price</span>: 890 Taka
            </p>
          </div>
          <div className="flex flex-col">
            <button className="p-1 bg-[#D2B48C] text-white cursor-pointer">
              <FaEye />
            </button>
            <button className="my-2 p-1 bg-[#3C393B] text-white cursor-pointer">
              <MdEdit />
            </button>
            <button className="p-1 bg-[#EA4744] text-white cursor-pointer">
              <MdDelete />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 bg-[#F5F4F1]">
          <img className="h-36" src={img1} alt="" />
          <div>
            <p>
              <span className="font-bold">Name</span>: Americano Coffee
            </p>
            <p className="my-2">
              <span className="font-bold">Chef</span>: Mr. Matin Paul
            </p>
            <p>
              <span className="font-bold">Price</span>: 890 Taka
            </p>
          </div>
          <div className="flex flex-col">
            <button className="p-1 bg-[#D2B48C] text-white cursor-pointer">
              <FaEye />
            </button>
            <button className="my-2 p-1 bg-[#3C393B] text-white cursor-pointer">
              <MdEdit />
            </button>
            <button className="p-1 bg-[#EA4744] text-white cursor-pointer">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
