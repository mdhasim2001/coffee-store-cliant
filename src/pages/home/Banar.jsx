import img1 from "../../assets/images/icons/1.png";
import img2 from "../../assets/images/icons/2.png";
import img3 from "../../assets/images/icons/3.png";
import img4 from "../../assets/images/icons/4.png";

export const Banar = () => {
  return (
    <div>
      <div className="banar_bg bg-cover bg-center w-full bg-no-repeat text-white flex items-center justify-end">
        <div className="lg:w-[40%] px-5 lg:ml-20 lg:mr-36">
          <h1 className="text-3xl font-bold font_family">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-[11px] my-3">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] text-[11px] text-black font-bold cursor-pointer py-2 px-3">
            Learn More
          </button>
        </div>
      </div>
      <div className=" w-full px-5 lg:px-[20%] bg-[#ECEAE3] py-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <img className="w-[50px] h-[50px]" src={img1} alt="" />
          <h1 className="font-family my-2 font-bold">Awesome Aroma</h1>
          <p className="text-[11px]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img className="w-[50px] h-[50px]" src={img2} alt="" />
          <h1 className="font-family my-2 font-bold">High Quality</h1>
          <p className="text-[11px]">
            We served the coffee to you maintaining the best quality{" "}
          </p>
        </div>
        <div>
          <img className="w-[50px] h-[50px]" src={img3} alt="" />
          <h1 className="font-family my-2 font-bold">Pure Grades</h1>
          <p className="text-[11px]">
            The coffee is made of the green coffee beans which you will love{" "}
          </p>
        </div>
        <div>
          <img className="w-[50px] h-[50px]" src={img4} alt="" />
          <h1 className="font-family my-2 font-bold">Proper Roasting</h1>
          <p className="text-[11px]">
            Your coffee is brewed by first roasting the green coffee beans{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
