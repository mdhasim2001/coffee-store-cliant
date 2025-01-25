import { createBrowserRouter } from "react-router-dom";
import { Main } from "./layout/Main";
import { Home } from "./pages/home/Home";
import { AddCoffee } from "./pages/AddCoffee";
import { CoffeeDetails } from "./pages/CoffeeDetails";
import { CoffeeDetailsUpdate } from "./pages/CoffeeDetailsUpdate";
import { CoffeeUserLogin } from "./pages/authentication/CoffeeUserLogin";
import { CoffeeUserRegister } from "./pages/authentication/CoffeeUserRegister";
import { PrivetRoute } from "./PrivetRoute";

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
        element: (
          <PrivetRoute>
            <AddCoffee />
          </PrivetRoute>
        ),
      },
      {
        path: "/coffeeDetails/:id",
        element: (
          <PrivetRoute>
            <CoffeeDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/coffeeDetailsUpdate/:id",
        element: (
          <PrivetRoute>
            <CoffeeDetailsUpdate />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/login",
        element: <CoffeeUserLogin />,
      },
      {
        path: "register",
        element: <CoffeeUserRegister />,
      },
    ],
  },
]);
