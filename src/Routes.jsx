import { createBrowserRouter } from "react-router-dom";
import { Main } from "./layout/Main";
import { Home } from "./pages/home/Home";
import { AddCoffee } from "./pages/AddCoffee";
import { CoffeeDetails } from "./pages/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);
