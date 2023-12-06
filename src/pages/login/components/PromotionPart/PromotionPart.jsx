import styled from "styled-components";
import { CohortSection } from "./components/CohortSection/CohortSection";
import { NotificationSection } from "./components/NotificationSection/NotificationSection";
import { TestimonialSection } from "./components/TestimonialSection/TestimonialSection";

const Container = styled.div`
  padding-top: 86px;
  padding-left: 60px;
  height: 100%;
  width: 60%;
  overflow: hidden;
`;

const PromotionPart = ({ chilren }) => {
  return (
    <Container>
      <NotificationSection />

      <CohortSection />

      <TestimonialSection />
    </Container>
  );
};

export { PromotionPart };
