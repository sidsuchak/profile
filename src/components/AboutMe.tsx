import styled from "styled-components";

const Section = styled.section`
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 30px;
  position: relative;
  color: #f8fafc;

  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: #27daf5;
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ParagraphContainer = styled.div`
  max-width: 900px;
  margin-top: 20px;
  padding: 0 10px;

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #cbd5e1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const AboutMe = () => {
  return (
    <Section id="about">
      <Heading>About Me</Heading>
      <ParagraphContainer>
        <Paragraph>
          I'm a passionate engineer with over 6 years of experience working
          across the JavaScript, TypeScript, ReactJS, Java, and automation
          ecosystem. Starting my career as a Manual QA, I quickly adapted to the
          evolving technology landscape, transitioning into frontend development
          and strengthening my expertise across the modern web stack.
        </Paragraph>
        <Paragraph>
          I specialize in building efficient, scalable, and user-centric
          applications using React and TypeScript, complemented by solid
          experience with testing and automation tools like Appium. My
          background also includes backend development with Java, giving me a
          well-rounded perspective across the full development lifecycle.
        </Paragraph>
        <Paragraph>
          Alongside development, I’m proficient with a wide range of tools and
          platforms including VS Code, IntelliJ, Git, Proxyman, AWS Console,
          Postman, and RDS—enabling me to debug, optimize, and deliver
          high-quality software with confidence.
        </Paragraph>
        <Paragraph>
          I excel at understanding business needs and translating them into
          meaningful product features, collaborating closely with
          cross-functional teams to create reliable and intuitive solutions.
          Whether it’s crafting clean, responsive UIs or strengthening
          automation and application logic, I’m driven by continuous learning,
          adaptability, and delivering impactful engineering outcomes.
        </Paragraph>
      </ParagraphContainer>
    </Section>
  );
};

export default AboutMe;
