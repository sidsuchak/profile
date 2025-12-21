import styled from "styled-components";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { BsTwitterX } from "react-icons/bs";

const Section = styled.section`
  padding: 80px 20px;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
`;
const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Cards = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Card = styled.div`
  background: #011518;
  border: 2px solid #27daf5;
  border-radius: 18px;
  padding: 30px 24px;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
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
  h4 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 12px;
  }
`;
const IconWrapper = styled.div`
  font-size: 2rem;
  color: #63e4f8;
  margin-bottom: 10px;
`;
const Label = styled.h4`
  font-size: 1.2rem;
  color: #1e293b;
`;
const MessageLink = styled.a`
  color: #8febfa;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;
const FormWrapper = styled.div`
  flex: 1;
  align-content: center;
  min-width: 320px;
  background: #011518;
  padding: 40px 30px;
  border-radius: 18px;
  border: 2px solid #27daf5;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
  position: relative;
  overflow: hidden;
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
    box-shadow: 0 0 40px rgba(56, 189, 248, 0.4);
    border-color: #0ea5e9;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Input = styled.input`
  padding: 14px 18px;
  background: #1e293b;
  border: 1px solid #8febfa;
  color: #f8fafc;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s;
  &:focus {
    border-color: #27daf5;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
    outline: none;
  }
  &::placeholder {
    color: #94a3b8;
  }
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #1e293b inset !important;
    -webkit-text-fill-color: #f8fafc !important;
    transition: background-color 9999s ease-in-out 0s;
  }
`;

const TextArea = styled.textarea`
  padding: 14px 18px;
  background: #1e293b;
  border: 1px solid #8febfa;
  color: #f8fafc;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: 0.3s;
  &:focus {
    border-color: #27daf5;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
    outline: none;
  }
  &::placeholder {
    color: #94a3b8;
  }
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #1e293b inset !important;
    -webkit-text-fill-color: #f8fafc !important;
    transition: background-color 9999s ease-in-out 0s;
  }
`;

const Button = styled.button`
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

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_cld1obm",
        "template_01hd4jo",
        formRef.current,
        "HHjq2a_audgmieDEI"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Title>Contact Me</Title>
        <ContentWrapper>
          <Cards>
            <Card>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <Label>Email</Label>
              <MessageLink href="mailto:sidsuchak@gmail.com">
                Send a message
              </MessageLink>
            </Card>

            <Card>
              <IconWrapper>
                <BsTwitterX />
              </IconWrapper>
              <Label>Twitter</Label>
              <MessageLink
                href="https://x.com/SiddharthSuchak"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </MessageLink>
            </Card>

            <Card>
              <IconWrapper>
                <FaWhatsapp />
              </IconWrapper>
              <Label>WhatsApp</Label>
              <MessageLink
                href="https://wa.me/918698316883"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </MessageLink>
            </Card>
          </Cards>
          <FormWrapper>
            <Form ref={formRef} onSubmit={sendEmail}>
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <TextArea name="message" placeholder="Your Message" required />
              <Button type="submit">Send Message</Button>
              {success && (
                <p style={{ color: "green" }}>Message sent successfully!</p>
              )}
            </Form>
          </FormWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
