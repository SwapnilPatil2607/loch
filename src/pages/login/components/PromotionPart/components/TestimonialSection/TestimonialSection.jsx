import { Icon } from "../../../../../../components/Icon";
import { TestimonialCard } from "../../../TestimonialCard/TestimonialCard";
import { ReviewCardDummyData } from "../../constants";
import { FlexBox } from "./Styles";

const TestimonialSection = () => {
  return (
    <FlexBox gap="40px">
      <Icon name="logo" />
      <div style={{ display: "flex", gap: "20px" }}>
        {ReviewCardDummyData.map(({ name, role, review }) => (
          <TestimonialCard key={role} name={name} role={role} review={review} />
        ))}
      </div>
    </FlexBox>
  );
};

export { TestimonialSection };
