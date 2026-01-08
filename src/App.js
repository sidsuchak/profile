import { useRef, useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import Profile from "./components/Profile.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Experience from "./components/Experience.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";
import Papers from "./components/Papers.tsx";
import CreativeExpressions from "./components/CreativeExpressions.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
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
      { threshold: 0.6 }
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
      {/* <div id="more">
        <CreativeExpressions />
        <Papers />
      </div> */}
      <ContactSection />
      <Footer />
      <Navbar activeSection={activeSection} />
    </>
  );
}

export default App;
