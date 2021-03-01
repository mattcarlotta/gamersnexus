import styled from "@emotion/styled";

const FlexStart = styled.div<{
  direction?: string;
  margin?: string;
  padding?: string;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${({ direction }) => direction || "row"};
  width: 100%;
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin || "0px"};
`;

export default FlexStart;
