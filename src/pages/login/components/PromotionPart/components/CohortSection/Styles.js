import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: ${({ align }) => align};
  text-align: ${({ textAlign }) => textAlign};
  width:15%;
`;

export { FlexBox, InfoBox };
