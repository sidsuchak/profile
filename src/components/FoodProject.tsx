import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function FoodProject() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Link to={"https://callerbot.vercel.app"}>
        <NavButton type="button">View Callerbot app</NavButton>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  background: transparent;
  border: 2px solid #27daf5;
  color: #27daf5;
  padding: 12px 28px;
  font-size: 1rem;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #27daf5;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
    z-index: -1;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  &:hover {
    color: #011518;
    border-color: #27daf5;
  }
  &:active {
    transform: scale(0.97);
  }
`;
