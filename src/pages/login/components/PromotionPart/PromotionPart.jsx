import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import { Text } from "../../../../components/Text";
import { NotificationCard } from "../NotificationCard/NotificationCard";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard";
import { Cohort } from "./Cohort";
import { NotificationCardDummyData } from "./constants";

const Container = styled.div`
  padding-top: 86px;
  padding-left: 60px;
  height: 100%;
  width: 60%;
  overflow: hidden;
`;

const GetNotifiedCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 322px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
`;

const PromotionPart = ({ chilren }) => {
  return (
    <Container>
      <FlexBox gap="57px">
        <GetNotifiedCard>
          <Icon name="whiteBell" />

          <Text type="H4" color="#F2F2F2">
            Get notified when a highly correlated whale makes a move
          </Text>
          <Text opacity={0.7} type="medium" color="#F2F2F2">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </Text>
        </GetNotifiedCard>

        <FlexBox gap="14px">
          {NotificationCardDummyData.map(({ key }) => (
            <NotificationCard key={key} />
          ))}
        </FlexBox>
      </FlexBox>

      <FlexBox gap="57px">
        <Cohort/>
      </FlexBox>
    </Container>
  );
};

export { PromotionPart };
