import img1 from "../../assets/images/cups/Rectangle 9.png";
import img2 from "../../assets/images/cups/Rectangle 10.png";
import img3 from "../../assets/images/cups/Rectangle 11.png";
import img4 from "../../assets/images/cups/Rectangle 12.png";
import img5 from "../../assets/images/cups/Rectangle 13.png";
import img6 from "../../assets/images/cups/Rectangle 14.png";
import img7 from "../../assets/images/cups/Rectangle 15.png";
import img8 from "../../assets/images/cups/Rectangle 16.png";

export const FollowOnInstagram = () => {
  return (
    <div className="px-5 lg:px-[20%] pt-10 mb-10">
      <div className="text-center">
        <p>Follow Us Now</p>
        <h1 className="text-2xl">Follow on Instagram</h1>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </div>
  );
};
