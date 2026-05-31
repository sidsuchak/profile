import { useState } from "react";
import { CONSTANTS } from "../../../constants/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={CONSTANTS.HEADER_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/projects/food-delivery-app">Home</Link>
          </li>
          <li>
            <Link to="/projects/food-delivery-app/about-us">About us</Link>
          </li>
          <li>
            <Link to="/projects/food-delivery-app/contact-us">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="signin" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
