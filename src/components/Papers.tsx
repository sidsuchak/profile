import styled from "styled-components";
import papersData from "../data/papers.json";

interface Paper {
  title: string;
  description: string;
  link: string;
  conference?: string;
  date?: string;
}

const Section = styled.section`
  padding: 100px 20px;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 60px;
  position: relative;
  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: #8febfa;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;
const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const Card = styled.div`
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
    font-size: 1rem;
    color: #cbd5e1;
    margin-bottom: 6px;
  }
`;

const PaperTitle = styled.h3`
  font-size: 1.4rem;
  color: #011518;
  margin-bottom: 12px;
`;
const Description = styled.p`
  font-size: 0.97rem;
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.6;
`;
const Meta = styled.div`
  font-size: 0.75rem;
  color: #ffffff;
  margin-bottom: 14px;
`;
const ViewLink = styled.a`
  font-size: 0.95rem;
  color: #8febfa;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #2563eb;
  }
`;

export default function Papers() {
  return (
    <Section id="papers">
      <Container>
        <Title>Published Papers</Title>
        <Grid>
          {(papersData as Paper[]).map((paper, index) => (
            <Card key={index}>
              <PaperTitle>{paper.title}</PaperTitle>
              <Description>{paper.description}</Description>
              {(paper.conference || paper.date) && (
                <Meta>
                  {paper.conference ? `Published in: ${paper.conference}` : ""}{" "}
                  {paper.date ? `| ${paper.date}` : ""}
                </Meta>
              )}
              <ViewLink href={paper.link} target="_blank" rel="noreferrer">
                View Paper →
              </ViewLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
