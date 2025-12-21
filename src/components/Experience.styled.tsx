import { styled } from "styled-components";

export const Section = styled.section`
  padding: 150px 20px;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  color: #f8fafc;

  &::after {
    content: "";
    width: 70px;
    height: 4px;
    background-color: #27daf5;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #011518;
  border: 2px solid #27daf5;
  border-radius: 18px;
  padding: 30px 24px;
  color: #f8fafc;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.15),
      transparent 60%
    );
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 0 40px rgba(56, 189, 248, 0.4);
    border-color: #0ea5e9;
  }
  h3 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 12px;
  }
  p {
    font-size: 1.05rem;
    color: #cbd5e1;
    margin-bottom: 6px;
  }
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  h3 {
    margin: 0;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 36, 64, 0.75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 35px;
  width: 90%;
  max-width: 650px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 50px rgba(56, 189, 248, 0.2);
  color: #e2e8f0;

  animation: modalEnter 0.4s ease;

  @keyframes modalEnter {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  h3 {
    font-size: 1.9rem;
    margin-bottom: 12px;
    color: #f0f9ff;
  }

  h4 {
    margin-top: 24px;
    margin-bottom: 10px;
    font-size: 1.15rem;
    color: #7dd3fc;
  }

  p {
    font-size: 1rem;
    line-height: 1.65;
    color: #cbd5e1;
  }

  ul {
    padding-left: 20px;
    margin-top: 10px;
  }

  li {
    margin-bottom: 8px;
    font-size: 0.98rem;
    color: #cbd5e1;
    list-style: disc;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #27daf5;
    border-radius: 4px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 24px;
  width: 38px;
  height: 38px;
  font-size: 1.6rem;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.25s ease;

  &:hover {
    background: #f87171;
    color: #ffffff;
    transform: rotate(90deg);
  }
`;
