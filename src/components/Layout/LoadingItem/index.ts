/* istanbul ignore file */
import styled from "@emotion/styled";

const LoadingItem = styled.div<{
  borderradius?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}>`
  display: inline-block;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1px"};
  animation: pulse 1.2s infinite;
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  border-radius: ${({ borderradius }) => borderradius || "0px"};
`;

export default LoadingItem;
