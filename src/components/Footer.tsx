import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const FooterContainer = styled.footer`
  color: #f8fafc;
  padding: 40px 20px;
  margin-bottom: 45px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #f8fafc;
    font-size: 1.4rem;
    transition: color 0.3s;

    &:hover {
      color: #60a5fa;
    }
  }
`;

const Copy = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://www.instagram.com/sidsuchak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </SocialLinks>
      <Copy>
        © {new Date().getFullYear()} Siddharth Suchak. All rights reserved.
      </Copy>
    </FooterContainer>
  );
};

export default Footer;
