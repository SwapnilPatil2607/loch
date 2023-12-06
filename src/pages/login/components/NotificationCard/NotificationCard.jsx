import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import { Text } from "../../../../components/Text";
import { Card, CardHeader, SelectBox ,CardContent} from "./Styles";

const NotificationCard = ({ Message }) => {
  return (
    <Card>
      <CardHeader>
        <Icon name="bell" />
        <Icon name="checkmark" />
      </CardHeader>

      <CardContent>
        <Text type="small" color="#19191A">
          Notify me when any wallets move more than
        </Text>
        <SelectBox>
          <Text type="verySmall" color="#19191A">
            something
          </Text>
          <Icon name="dropDown" />
        </SelectBox>
        <Text type="small" color="#19191A">
          becomes active
        </Text>
      </CardContent>
    </Card>
  );
};

export { NotificationCard };
