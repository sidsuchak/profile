import { useEffect, useState } from "react";

export const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=676001&catalog_qa=undefined&submitAction=ENTER",
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Salad</li>
      </ul>
    </div>
  );
};
