import styled from "styled-components";
import { Cohort } from "./components/CohortSection/CohortImage";
import { CohortSection } from "./components/CohortSection/CohortSection";
import { FlexBox, InfoBox } from "./components/CohortSection/Styles";
import { NotificationSection } from "./components/NotificationSection/NotificationSection";
import { TestimonialSection } from "./components/TestimonialSection/TestimonialSection";
import { Icon } from "../../../../components/Icon";
import { Text } from "../../../../components/Text";
const Container = styled.div`
  padding-top: 86px;
  padding-bottom: 86px;
  padding-left: 60px;
  height: 100%;
  width: 100%;
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
