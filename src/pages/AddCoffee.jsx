import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const AddCoffee = () => {
  const hendleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const teste = form.teste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const price = form.price.value;

    const coffeeDetails = {
      name,
      chef,
      supplier,
      teste,
      category,
      details,
      price,
      photoUrl,
    };

    console.log(coffeeDetails);

    try {
      fetch("http://localhost:5000/coffees", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffeeDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("Your coffee is add");
          }
          form.reset();
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add_coffee_bg py-10 px-5 lg:px-[20%] bg-cover bg-center w-full bg-no-repeat">
      <div>
        <Link to="/">
          <button className="flex items-center gap-3 font-bold">
            <IoMdArrowRoundBack />
            Back to home
          </button>
        </Link>
      </div>
      <div className="mt-5 bg-[#F4F3F0] p-10">
        <div className="text-center">
          <h1 className="text-xl mb-2 font-extrabold">Add New Coffee</h1>
          <p className="w-[90%] mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={hendleAddCoffee} className="mt-5 flex flex-col gap-5">
          <div className="flex items-center justify-center gap-5">
            <div className="w-full">
              <p className="mb-2 font-bold">Name</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="name"
                placeholder="Enter coffee name"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Chef</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="chef"
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-full">
              <p className="mb-2 font-bold">Supplier</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="supplier"
                placeholder="Enter coffee supplier"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Teste</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="teste"
                placeholder="Enter coffee teste"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-full">
              <p className="mb-2 font-bold">Category</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="category"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Details</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="details"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-full">
              <p className="mb-2 font-bold">Price</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="price"
                placeholder="Enter coffee price"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Photo URL</p>
              <input
                className="w-full py-2 px-2 bg-white rounded-lg text-[11px]"
                type="text"
                required
                name="photoUrl"
                placeholder="Enter coffee photo URL"
              />
            </div>
          </div>
          <input
            className="w-full py-2 px-5 rounded-lg text-[11px] bg-[#D2B48C] cursor-pointer"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};
