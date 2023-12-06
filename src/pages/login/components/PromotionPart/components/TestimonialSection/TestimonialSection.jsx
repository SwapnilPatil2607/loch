import { Icon } from "../../../../../../components/Icon";
import { Text } from "../../../../../../components/Text";
import { TestimonialCard } from "../../../TestimonialCard/TestimonialCard";
import { ReviewCardDummyData } from "../../constants";
import { Divider, FlexBox } from "./Styles";

const TestimonialSection = () => {
  return (
    <>
      <FlexBox>
        <Text type="H5" color="#F2F2F2">
          Testimonials
        </Text>
      </FlexBox>
      <Divider />
      <FlexBox gap="40px">
        <Icon name="logo" />
        <div style={{ display: "flex", gap: "20px" }}>
          {ReviewCardDummyData.map(({ name, role, review }) => (
            <TestimonialCard
              key={role}
              name={name}
              role={role}
              review={review}
            />
          ))}
        </div>
      </FlexBox>
    </>
  );
};

export { TestimonialSection };
