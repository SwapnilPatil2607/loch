import { Text } from "../../../../components/Text";
import { Card, CardHeader, CardContent } from "./Styles";

const TestimonialCard = ({ name, role, review }) => {
  return (
    <Card>
      <CardHeader>
        <Text bold type="medium" color="#19191A">
          {name}
        </Text>
        <Text type="small" color="#96979A">
          {role}
        </Text>
      </CardHeader>

      <CardContent>
        <Text type="medium" color="#19191A">
          {review}
        </Text>
      </CardContent>
    </Card>
  );
};

export { TestimonialCard };
