import { AuthenticationPart } from "./components/AuthenticationPart/AuthenticationPart";
import { PromotionPart } from "./components/PromotionPart/PromotionPart";
import styled from "styled-components";

const Container = styled.div`
  background: radial-gradient(
    92.19% 89.74% at 32.27% 91.27%,
    rgba(31, 169, 17, 0.81) 17.21%,
    #2f15d0 64.58%,
    rgba(0, 0, 0, 0) 100%
  );
  min-height: 100vh;
  max-height: fit-content;
  position: relative;
  overflow:hidden;
`;

const Login = () => {
  return (
    <Container>
      <PromotionPart />
      <AuthenticationPart />
     
    </Container>
  );
};

export { Login };
