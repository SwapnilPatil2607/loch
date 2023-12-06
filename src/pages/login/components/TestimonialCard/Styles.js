import styled from "styled-components";

const Card = styled.div`
  border-radius: 12px;
  background: var(--White, #fff);
  /* ShadowDropdown */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  min-width: 353px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
`;

const CardContent = styled.div``;

export { Card, CardHeader, CardContent };
