import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  align-items: end;
  text-align: end;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(229, 229, 230, 0.5);
  margin: 20px 0px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 322px;
  min-width: 305px;
  align-items: ${({ align }) => align};
  text-align: ${({ textAlign }) => textAlign};
`;

export { FlexBox, InfoBox,Divider };
