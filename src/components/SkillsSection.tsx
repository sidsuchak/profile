import styled from "styled-components";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import javascript from "../images/icons/javascript.svg";
import figma from "../images/icons/figma.svg";
import typescript from "../images/icons/typescript.svg";
import react from "../images/icons/react.svg";
import git from "../images/icons/git.svg";
import github from "../images/icons/github.svg";
import android from "../images/icons/android.svg";
import redux from "../images/icons/redux.svg";
import jsx from "../images/icons/jsx.svg";
import restApi from "../images/icons/restApi.svg";
import cypress from "../images/icons/cypress.svg";
import agGrid from "../images/icons/agGrid.svg";
import testing from "../images/icons/testing.svg";
import intellij from "../images/icons/intellij.svg";
import vsCode from "../images/icons/vsCode.svg";
import jira from "../images/icons/jira.svg";
import micronaut from "../images/icons/micronaut.svg";
import c from "../images/icons/c.svg";
import cPlus from "../images/icons/c++.svg";

const Section = styled.section`
  padding: 30px 40px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;

  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: #27daf5;
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
const CategoryWrapper = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;
const CategoryTitle = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 30px;
  text-transform: capitalize;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 0 auto;
  @media (max-width: 768px) {
    gap: 30px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;
const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;
const SkillName = styled.span`
  font-size: 0.95rem;
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const TECHNICAL_SKILLS = {
  programming_Languages: [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Redux", icon: redux },
    { name: "JSX", icon: jsx },
    { name: "Typescript", icon: typescript },
    { name: "Git", icon: git },
    { name: "Android", icon: android },
    { name: "Rest APIs", icon: restApi },
  ],
  frameworks_and_libraries: [
    { name: "React", icon: react },
    { name: "AG-Grid", icon: agGrid },
    { name: "React Testing Library", icon: testing },
    { name: "Cypress", icon: cypress },
    { name: "Micronaut", icon: micronaut },
  ],
  tools_and_IDE: [
    { name: "VS Code", icon: vsCode },
    { name: "IntelliJ", icon: intellij },
    { name: "Figma", icon: figma },
    { name: "GitHub", icon: github },
    { name: "JIRA", icon: jira },
  ],
  additional_skills: [
    { name: "C", icon: c },
    { name: "C++", icon: cPlus },
  ],
};

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      {Object.entries(TECHNICAL_SKILLS).map(([categoryName, skills]) => (
        <CategoryWrapper key={categoryName}>
          <CategoryTitle>{categoryName.replace(/_/g, " ")}</CategoryTitle>
          <Grid>
            {skills.map((skill) => (
              <SkillCard key={skill.name}>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </Grid>
        </CategoryWrapper>
      ))}
    </Section>
  );
}
