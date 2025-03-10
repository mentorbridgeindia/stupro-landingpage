import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const FAQContainer = styled.section`
  padding: 8rem 5%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(120deg, #dcaa14, #dcaa14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AccordionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
`;

const AccordionHeader = styled.div<{ isOpen: boolean }>`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isOpen }) =>
    isOpen ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: background 0.3s ease;

  h3 {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 1.5rem;
  color: #e0e0e0;
  line-height: 1.6;
`;

const Icon = styled.span<{ isOpen: boolean }>`
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

const faqs = [
  {
    question: "What platforms does your app support?",
    answer:
      "Our app is available on Android platform, ensuring a seamless experience across all devices.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We implement bank-grade encryption and follow strict security protocols to ensure your data is always protected.",
  },
  {
    question: "Do you ask me to pay for the app?",
    answer: "No! StuPro is free to download and use all the time.",
  },
  {
    question: "What makes your app different?",
    answer:
      "Our unique combination of advanced features, intuitive design, and powerful performance sets us apart from the competition.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <FAQContainer id="faq">
      <div className="sub-title">FREQUENTLY ASKED QUESTIONS</div>

      <AccordionContainer>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <AccordionHeader
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3>{faq.question}</h3>
              <Icon isOpen={openIndex === index}>▼</Icon>
            </AccordionHeader>
            <AnimatePresence>
              {openIndex === index && (
                <AccordionContent
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{ padding: "1.5rem 0" }}>{faq.answer}</p>
                </AccordionContent>
              )}
            </AnimatePresence>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </FAQContainer>
  );
};

export default FAQSection;
