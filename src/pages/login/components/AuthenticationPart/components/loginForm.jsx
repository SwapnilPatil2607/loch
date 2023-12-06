import styled from "styled-components";
import { Text } from "../../../../../components/Text";

const Container = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const InputBox = styled.input`
   width: 365px;
  padding: 20px 24px;
  border-radius: 8px;
  border: 1px solid var(--grey-100, #e5e5e6);
  background: #fff;
  /* ShadowDropdown */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 4px 10px 0px rgba(0, 0, 0, 0.04);
`;

const SubmitButton = styled.button`
  display: flex;
  width: 415px;
  height: 59px;
  padding: 18px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--grey-900, #19191a);
  background: var(--grey-900, #19191a);
`;
const LoginForm = () => {
  return (
    <Container>
      <Text type="H3" color="#B0B1B3">
        Sign up for <br /> exclusive access.
      </Text>
      <InputBox />
      <SubmitButton>
        <Text type="label" color="white">
          Get started
        </Text>
      </SubmitButton>
      <Text type="label" color="black">
        You’ll receive an email with an invite link to join.
      </Text>
    </Container>
  );
};

export { LoginForm };
