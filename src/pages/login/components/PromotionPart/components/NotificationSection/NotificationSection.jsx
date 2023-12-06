import { Icon } from "../../../../../../components/Icon";
import { Text } from "../../../../../../components/Text";
import { NotificationCard } from "../../../NotificationCard/NotificationCard";
import { NotificationCardDummyData } from "../../constants";
import { FlexBox, InfoBox } from "./Styles";

const NotificationSection = () => {
  return (
    <FlexBox gap="57px">
      <InfoBox>
        <Icon name="whiteBell" />

        <Text type="H4" color="#F2F2F2">
          Get notified when a highly correlated whale makes a move
        </Text>
        <Text opacity={0.7} type="medium" color="#F2F2F2">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </Text>
      </InfoBox>

      <FlexBox gap="14px">
        {NotificationCardDummyData.map(({ key }) => (
          <NotificationCard key={key} />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export { NotificationSection };
