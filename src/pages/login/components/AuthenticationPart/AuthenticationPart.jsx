import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  box-shadow: 0 45px 65px rgba(0,0,0,0.50), 0 35px 22px rgba(0,0,0,0.16);
  height: 100%;
  width: 640px;
  position:absolute;
  top:0px;
  right:0px
`;

const AuthenticationPart = ({ chilren }) => {
  return <Container></Container>;
};

export { AuthenticationPart };
