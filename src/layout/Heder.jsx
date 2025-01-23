import logo from "../assets/images/more/logo.png";

export const Heder = () => {
  return (
    <div className="heder_bg bg-cover bg-center h-[15vh] w-full bg-no-repeat flex items-center justify-center">
      <img className="h-10 w-10" src={logo} alt="" />
      <h1 className="font_family text-3xl text-white">Espresso Emporium</h1>
    </div>
  );
};
