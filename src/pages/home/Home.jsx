import React from "react";
import { Banar } from "./Banar";
import { FollowOnInstagram } from "./FollowOnInstagram";
import { CoffeeProduct } from "./CoffeeProduct";

export const Home = () => {
  return (
    <div>
      <Banar />
      <CoffeeProduct />
      <FollowOnInstagram />
    </div>
  );
};
