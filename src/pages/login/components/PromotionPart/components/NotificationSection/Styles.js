import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
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

export { FlexBox, InfoBox };
