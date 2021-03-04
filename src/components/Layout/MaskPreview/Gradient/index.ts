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
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
  }
`;

export default Gradient;
