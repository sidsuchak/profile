import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const FoodDelivery = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
