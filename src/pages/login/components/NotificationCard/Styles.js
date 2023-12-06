import styled from "styled-components";

const Card = styled.div`
  width: 189.7px;
  height: 171.5px;
  padding: 14px;
  border-radius: 8.4px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 27.5%,
      rgba(22, 93, 255, 0.16) 157.71%
    ),
    #fff;
  box-shadow: 0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04),
    0px 2.8px 7px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardContent = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  /* justify-content: end; */
  p {
    margin: 0;
  }
`;

const SelectBox = styled.div`
  gap: 2.8px;
  width: 66.4px;
  height: 19.6px;
  display: flex;
  padding: 4.2px;
  border-radius: 2.8px;
  justify-content: space-between;
  background: var(--grey-50, rgba(229, 229, 230, 0.5));
  align-items: center;
`;

export { Card, CardHeader, SelectBox,CardContent };
