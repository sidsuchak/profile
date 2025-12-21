import React, { useEffect, useState } from "react";
import { ExperienceType } from "../types/experienceType.d.tsx";
import experiences from "../data/experiences.json";
import {
  Card,
  CardContainer,
  CloseButton,
  ModalBox,
  Overlay,
  Section,
  Title,
} from "./Experience.styled.tsx";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceType | null>(null);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    if (selected) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }
  }, [selected]);
  const handleCardClick = (exp: ExperienceType) => {
    setSelected(exp);
  };
  const handleClose = () => setSelected(null);
  return (
    <Section id="experiences">
      <Title>Experience</Title>
      <CardContainer>
        {experiences.map((exp) => (
          <Card key={exp.id} onClick={() => handleCardClick(exp)}>
            {/* <ExperienceContainer> */}
            <h3>{exp.title}</h3> <p>{exp.period}</p>
            {/* </ExperienceContainer> */}
            <p>{exp.company}</p>
          </Card>
        ))}
      </CardContainer>

      {selected && (
        <Overlay>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose}>×</CloseButton>
            <h3>{selected.title}</h3>
            <p>
              <strong>{selected.company}</strong>
            </p>
            <p>
              {selected.period} | {selected.location}
            </p>
            <h4>Overview</h4>
            <p>{selected.description}</p>
            <h4>Key Responsibilities</h4>
            <ul>
              {selected.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <h4>Technologies Used</h4>
            <ul>
              {selected.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </ModalBox>
        </Overlay>
      )}
    </Section>
  );
}
