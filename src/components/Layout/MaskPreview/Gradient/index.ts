import styled from "@emotion/styled";

const Gradient = styled.div<{
  height: number;
  maxHeight: number;
  minHeight?: number;
  maskHeight: number;
}>`
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  min-height: ${({ minHeight }) => `${minHeight}px`};
  overflow: hidden;
  position: relative;
  word-break: break-word;
  text-align: left;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    display: ${({ height, maxHeight, maskHeight }) =>
      height >= maxHeight - maskHeight ? "block" : "none"};
    left: 0;
    top: 0;
    background: linear-gradient(transparent 60%, white);
  }
`;

export default Gradient;
