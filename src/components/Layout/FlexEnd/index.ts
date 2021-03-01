import styled from "@emotion/styled";

const FlexEnd = styled.div<{ direction?: string; width?: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${({ width }) => width || "auto"};
`;

export default FlexEnd;
