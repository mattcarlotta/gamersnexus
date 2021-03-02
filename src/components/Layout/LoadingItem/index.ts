/* istanbul ignore file */
import styled from "@emotion/styled";

const LoadingItem = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
}>`
    display: inline-block;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "1px"};
    animation: pulse 1.2s infinite;
    margin: ${({ margin }) => margin || "0px"};
  }
`;

export default LoadingItem;
