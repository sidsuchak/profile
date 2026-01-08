import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import face from "../images/drawings/face.jpeg";
import mandala1 from "../images/drawings/mandala1.jpeg";
import mandala2 from "../images/drawings/mandala2.jpeg";
import mandala3 from "../images/drawings/mandala3.jpeg";
import radhakrishna from "../images/drawings/radhakrishna.jpeg";
import sketch1 from "../images/drawings/sketch1.jpeg";
import sketch2 from "../images/drawings/sketch2.jpeg";
import sketch3 from "../images/drawings/sketch3.jpeg";
import rangoli1 from "../images/rangoli/rangoli1.jpeg";
import rangoli2 from "../images/rangoli/rangoli2.jpeg";
import rangoli3 from "../images/rangoli/rangoli3.jpeg";
import rangoli4 from "../images/rangoli/rangoli4.jpeg";
import rangoli5 from "../images/rangoli/rangoli5.jpeg";
import rangoli6 from "../images/rangoli/rangoli6.jpeg";
import rangoli7 from "../images/rangoli/rangoli7.jpeg";
import rangoli8 from "../images/rangoli/rangoli8.jpeg";
import rangoli9 from "../images/rangoli/rangoli9.jpeg";
import rangoli10 from "../images/rangoli/rangoli10.jpeg";

const Section = styled.section`
  padding-top: 20px;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: #27daf5;
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;
const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 50px;
  font-size: 1.1rem;
  line-height: 1.6;
`;
const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const ArtCard = styled.div`
  background: #1e293b;
  border: 2px solid #27daf5;
  border-radius: 18px;
  padding: 40px;
  width: 260px;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
  z-index: 1;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 0 35px rgba(56, 189, 248, 0.35);
    border-color: #0ea5e9;
  }
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.12),
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
  h3 {
    margin: 0;
    font-size: 1.6rem;
    color: #f1f5f9;
    text-align: center;
  }
  span {
    font-size: 3rem;
    display: block;
    margin-bottom: 20px;
    text-align: center;
    color: #f8fafc;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled(motion.div)`
  backdrop-filter: blur(14px);
  padding: 30px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffffcc;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  padding: 10px 16px;
  cursor: pointer;
  z-index: 1000;
  transition: background 0.2s;
  margin: 0px 60px;
  &:hover {
    background: #e2e8f0;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 70px;
  right: 20px;
  font-size: 2.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 1001;
  &:hover {
    color: #f87171;
  }
`;
const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  max-width: 90vw;
  padding: 40px 20px;
  position: relative;
`;

const CarouselImage = styled(motion.img)<{ isActive: boolean }>`
  width: ${(props) => (props.isActive ? "420px" : "200px")};
  height: auto;
  border-radius: 14px;
  filter: ${(props) => (props.isActive ? "none" : "blur(3px)")};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  box-shadow: ${(props) =>
    props.isActive ? "0 0 25px rgba(56, 189, 248, 0.4)" : "none"};
  transition: all 0.4s ease-in-out;
  object-fit: contain;
`;

export default function CreativeExpressions() {
  const [selectedGallery, setSelectedGallery] = useState<
    "drawings" | "rangoli" | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleries = {
    drawings: [
      { title: "Face", image: face },
      { title: "Mandala Art", image: mandala1 },
      { title: "Mandala Art", image: mandala2 },
      { title: "Mandala Art", image: mandala3 },
      { title: "Radha Krishna", image: radhakrishna },
      { title: "Sketch", image: sketch1 },
      { title: "Sketch", image: sketch2 },
      { title: "Sketch", image: sketch3 },
    ],
    rangoli: [
      { title: "Rangoli 1", image: rangoli1 },
      { title: "Rangoli 2", image: rangoli2 },
      { title: "Rangoli 3", image: rangoli3 },
      { title: "Rangoli 4", image: rangoli4 },
      { title: "Rangoli 5", image: rangoli5 },
      { title: "Rangoli 6", image: rangoli6 },
      { title: "Rangoli 7", image: rangoli7 },
      { title: "Rangoli 8", image: rangoli8 },
      { title: "Rangoli 9", image: rangoli9 },
      { title: "Rangoli 10", image: rangoli10 },
    ],
  };
  useEffect(() => {
    document.body.style.overflow = selectedGallery ? "hidden" : "auto";
    if (selectedGallery) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }
  }, [selectedGallery]);
  const currentGallery = selectedGallery ? galleries[selectedGallery] : [];
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentGallery.length) % currentGallery.length
    );
  };
  const closeModal = () => {
    setSelectedGallery(null);
    setCurrentIndex(0);
  };

  return (
    <Section id="creative">
      <Title>Creative Expressions</Title>
      <Description>
        I love exploring creativity through drawing and rangoli. It sharpens my
        attention to detail and balance — skills I also apply in frontend
        development.
      </Description>

      <CardGrid>
        <ArtCard onClick={() => setSelectedGallery("drawings")}>
          <span>🖌️</span>
          <h3>Drawings</h3>
        </ArtCard>
        <ArtCard onClick={() => setSelectedGallery("rangoli")}>
          <span>🌸</span>
          <h3>Rangoli</h3>
        </ArtCard>
      </CardGrid>

      <AnimatePresence>
        {selectedGallery && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal}>&times;</CloseButton>

              <CarouselWrapper>
                {[-1, 0, 1].map((offset) => {
                  const total = currentGallery.length;
                  const index = (currentIndex + offset + total) % total;
                  const isActive = offset === 0;

                  return (
                    <CarouselImage
                      key={index + "-" + currentIndex}
                      src={currentGallery[index].image}
                      alt={currentGallery[index].title}
                      isActive={isActive}
                      initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                      animate={{ opacity: 1, scale: isActive ? 1 : 0.85, x: 0 }}
                    />
                  );
                })}
              </CarouselWrapper>
              <NavButton onClick={prevImage} style={{ left: 10 }}>
                ⬅️
              </NavButton>
              <NavButton onClick={nextImage} style={{ right: 10 }}>
                ➡️
              </NavButton>
            </ModalContent>
          </Overlay>
        )}
      </AnimatePresence>
    </Section>
  );
}
