import { MdCall, MdEmail } from "react-icons/md";
import img1 from "../assets/images/more/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="footer_bg py-[5%] px-5 lg:px-[20%] bg-cover bg-center w-full bg-no-repeat">
        <img className="w-[50px] h-[50px] mb-5" src={img1} alt="" />

        {/* left site  */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h1 className="text-2xl text-[#331A15]">Espresso Emporium</h1>
            <p className="my-3">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex items-center gap-3 text-2xl">
              <FaFacebook />
              <FaTwitter />
              <FaInstagramSquare />
              <FaLinkedin />
            </div>
            <h1 className="text-2xl text-[#331A15] my-5">Get in Touch</h1>
            <div className="flex gap-3 flex-col">
              <p className="flex items-center gap-2">
                <MdCall />
                +88 01533 333 333
              </p>
              <p className="flex items-center gap-2">
                <MdEmail />
                info@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <IoLocationSharp />
                72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>

          {/* right site  */}
          <div>
            <h1 className="text-2xl text-[#331A15] mb-3">Connect with Us</h1>
            <div className="flex flex-col items-start justify-center gap-5">
              <input
                className="w-full py-2 px-5 bg-white rounded-lg text-[11px]"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="w-full py-2 px-5 bg-white rounded-lg text-[11px]"
                type="email"
                placeholder="Enter your email"
              />
              <textarea
                className="w-full py-2 px-5 bg-white rounded-lg text-[11px]"
                rows={3}
                name=""
                placeholder="Enter your massage"
                id=""
              ></textarea>
              <button className="text-[11px] border border-black rounded-lg py-2 px-5 font-bold cursor-pointer">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="copy_right bg-cover bg-center w-full bg-no-repeat">
        <h1 className="text-white text-center mx-auto py-2 text-[12px]">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>
      </div>
    </div>
  );
};
