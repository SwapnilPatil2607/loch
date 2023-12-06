import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import { Text } from "../../../../components/Text";
import { Card, CardHeader, SelectBox, CardContent } from "./Styles";

const NotificationCard = ({ message, icon }) => {
  return (
    <Card>
      <CardHeader>
        <Icon name={icon} />
        <Icon name="checkmark" />
      </CardHeader>

      <CardContent>
        <Text type="small" color="#19191A">
          {message}
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
