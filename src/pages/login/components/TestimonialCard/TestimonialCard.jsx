import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import { Text } from "../../../../components/Text";
import { Card, CardHeader, CardContent } from "./Styles";

const TestimonialCard = ({ Message }) => {
  return (
    <Card>
      <CardHeader>
        <Text bold type="medium" color="#19191A">
          Jack F
        </Text>
        <Text type="small" color="#96979A">
          Ex Blackrock PM
        </Text>
      </CardHeader>

      <CardContent>
        <Text type="medium" color="#19191A">
        “Love how Loch integrates portfolio analytics and whale watching into one unified app.”
        </Text>
      </CardContent>
    </Card>
  );
};

export { TestimonialCard };
