import { useState } from "react";

import { Text } from "../../../../../components/Text";
import { Container, InputBox, SubmitButton } from "./Styles";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onSubmit = () => {
    console.log("hello", isValid);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
  };
  return (
    <Container>
      <Text type="H3" color="#B0B1B3">
        Sign up for <br /> exclusive access.
      </Text>
      <InputBox onChange={(e) => setEmail(e.target.value)} />
      <SubmitButton onClick={() => onSubmit()}>
        <Text type="label" color="white">
          Get started
        </Text>
      </SubmitButton>

      {!isValid ? (
        <Text type="medium" color="red">
          Enter Valid Email
        </Text>
      ) : null}

      <Text type="label" color="black">
        You’ll receive an email with an invite link to join.
      </Text>
    </Container>
  );
};

export { LoginForm };
