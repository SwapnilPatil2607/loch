import styled from "styled-components";
import { NotificationCard } from "../NotificationCard/NotificationCard";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard";

const Container = styled.div`
  padding-top: 86px;
  padding-left: 60px;
  height: 100vh;
  width: 60%;
`;

const PromotionPart = ({ chilren }) => {
  return (
    <Container>
      <NotificationCard />
      <TestimonialCard />
    </Container>
  );
};

export { PromotionPart };
