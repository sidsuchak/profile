import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaUserAlt,
  FaTools,
  FaBriefcase,
  FaEnvelope,
  FaEllipsisH,
} from "react-icons/fa";

const Nav = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 14px 30px;
  background: rgba(56, 189, 248, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    padding: 10px 18px;
    border-radius: 30px;
    position: relative;
    transition: all 0.3s ease;
    &:hover {
      color: #011518;
      background: rgba(255, 255, 255, 0.1);
    }
    &.active {
      color: #011518;
      background: linear-gradient(145deg, #60a5fa, #27daf5);
      font-weight: 600;
    }
    span {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  @media (max-width: 600px) {
    gap: 8px;
    a {
      padding: 10px;
      font-size: 0.75rem;

      svg {
        font-size: 1rem;
      }
    }
  }
`;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>(
    window.location.hash || "#about"
  );

  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(window.location.hash || "#about");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <Nav>
      <NavLinks>
        <a href="#about" className={activeSection === "#about" ? "active" : ""}>
          <FaUserAlt size={16} />
          <span>About</span>
        </a>
        <a
          href="#experiences"
          className={activeSection === "#experiences" ? "active" : ""}
        >
          <FaBriefcase size={16} />
          <span>Experience</span>
        </a>
        <a
          href="#skills"
          className={activeSection === "#skills" ? "active" : ""}
        >
          <FaTools size={16} />
          <span>Skills</span>
        </a>
        <a href="#more" className={activeSection === "#more" ? "active" : ""}>
          <FaEllipsisH size={16} />
          <span>More</span>
        </a>
        <a
          href="#contact"
          className={activeSection === "#contact" ? "active" : ""}
        >
          <FaEnvelope size={16} />
          <span>Contact</span>
        </a>
      </NavLinks>
    </Nav>
  );
}
