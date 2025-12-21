import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileImg from "../images/profile.jpeg";
import { FiDownload } from "react-icons/fi";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow: hidden;
  background: transparent;
`;
const StyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  gap: 60px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;
const Left = styled.div`
  flex: 1;
  padding: 0 20px;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin: 10px 0;
  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;
const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const Intro = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  max-width: 500px;
  @media (max-width: 768px) {
    margin: 20px auto;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const IconRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
  }
  a {
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
    &:hover {
      background-color: #cbd5e1;
    }
    svg {
      color: #011518;
      font-size: 20px;
    }
  }
`;
const ProfileImage = styled.img`
  min-width: 350px;
  max-width: 400px;
  height: 750px;
  width: 80%;
  object-fit: cover;
  border-radius: 180px / 240px;
  border: 6px solid #27daf5;
  box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.6);
  animation: pulse 2.5s infinite;
  &:hover {
    animation: none;
    transform: scale(1.04);
    box-shadow: 0 16px 36px rgba(56, 189, 248, 0.5);
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4);
    }
    70% {
      box-shadow: 0 0 0 36px rgba(56, 189, 248, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    }
  }
`;
const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #6b21a8, #8febfa);
  border: none;
  border-radius: 40px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.5);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 12px rgba(59, 130, 246, 0.2);
  }
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const Icon = styled(FiDownload)`
  font-size: 1.2rem;
`;

export default function Profile() {
  return (
    <Section>
      <StyledComponent>
        <Left>
          <p>Hi, I am</p>
          <Name>Siddharth Suchak</Name>
          <Title>Software Development Engineer</Title>
          <Intro>
            I craft high-performance mobile applications using React Native and
            TypeScript. Skilled in modern mobile development practices, I build
            intuitive, responsive user experiences across iOS and Android. My
            focus is on performance optimization, scalability, and clean,
            maintainable UI. Passionate about turning ideas into seamless,
            user-centric mobile products.
          </Intro>
          <IconRow>
            <a
              href="https://github.com/sidsuchak"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-suchak-5b45b0118/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </IconRow>
          <DownloadButton href="/SidLatestUpdated.pdf" download>
            <Icon /> Download Resume
          </DownloadButton>
        </Left>
        <Right>
          <ProfileImage src={ProfileImg} alt="Siddharth Suchak" />
        </Right>
      </StyledComponent>
    </Section>
  );
}
