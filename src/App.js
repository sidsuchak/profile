import { useRef, useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import Profile from "./components/Profile.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Experience from "./components/Experience.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import FoodProject from "./components/FoodProject.tsx";
import { createBrowserRouter } from "react-router-dom";
import { FoodDelivery } from "./components/FoodDelivery/FoodDelivery.tsx";
import { AboutUs } from "./components/FoodDelivery/components/AboutUs.jsx";
import { ContactUs } from "./components/FoodDelivery/components/ContactUs.jsx";
import { Ich } from "./components/FoodDelivery/components/Ich.jsx";
import { Body } from "./components/FoodDelivery/components/Body.jsx";
import { RestaurantMenu } from "./components/FoodDelivery/components/RestaurantMenu.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/projects", element: <MyProjects /> },
  {
    path: "/projects/food-delivery-app",
    element: <FoodDelivery />,
    children: [
      {
        path: "/projects/food-delivery-app",
        element: <Body />,
      },
      {
        path: "/projects/food-delivery-app/about-us",
        element: <AboutUs />,
      },
      {
        path: "/projects/food-delivery-app/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/projects/food-delivery-app/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  { path: "*", element: <Ich /> },
]);

export function App() {
  const [activeSection, setActiveSection] = useState("none");
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const moreRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "skills", ref: skillsRef },
      { id: "experiences", ref: experienceRef },
      { id: "more", ref: moreRef },
      { id: "contact", ref: contactRef },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          setActiveSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      { threshold: 0.6 },
    );
    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <Profile onKnowMoreClick={scrollToAbout} />
      <AboutMe ref={aboutRef} />
      <Experience />
      <SkillsSection />
      <FoodProject />
      <ContactSection />
      <Footer />
      <Navbar activeSection={activeSection} />
    </>
  );
}
