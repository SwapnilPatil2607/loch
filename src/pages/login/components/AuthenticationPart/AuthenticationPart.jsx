import { LoginForm } from "./components/loginForm";
import { Container } from "./Styles";

const AuthenticationPart = ({ chilren }) => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export { AuthenticationPart };
