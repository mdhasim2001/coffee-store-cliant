import { createBrowserRouter } from "react-router-dom";
import { Main } from "./layout/Main";
import { Home } from "./pages/home/Home";
import { AddCoffee } from "./pages/AddCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
    ],
  },
]);
