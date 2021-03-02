import styled from "@emotion/styled";

const TextAlign = styled.div<{
  center?: boolean;
  left?: boolean;
  right?: boolean;
}>`
  text-align: ${({ center, left, right }) => {
    switch (true) {
      case center:
        return "center";
      case left:
        return "left";
      case right:
        return "right";
      default:
        return "unset";
    }
  }};
`;

export default TextAlign;
