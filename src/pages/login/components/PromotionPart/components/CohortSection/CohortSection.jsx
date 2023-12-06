import { Icon } from "../../../../../../components/Icon";
import { Text } from "../../../../../../components/Text";
import { Cohort } from "./CohortImage";
import { FlexBox, InfoBox } from "./Styles";

const CohortSection = () => {
  return (
    <FlexBox gap="57px">
      <Cohort />

      <InfoBox textalign="end" align="end">
        <Icon name="eye" />

        <Text type="H4" color="#F2F2F2">
          Watch what the whales are doing
        </Text>

        <Text opacity={0.7} type="medium" color="#F2F2F2">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </Text>
      </InfoBox>
    </FlexBox>
  );
};

export { CohortSection };
