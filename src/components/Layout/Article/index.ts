/* istanbul ignore file */
import styled from "@emotion/styled";

const Article = styled.article<{
  alignitems?: string;
  direction?: string;
  display?: string;
  padding?: string;
}>`
  display: ${({ display }) => display || "flex"};
  padding: ${({ padding }) => padding || "0px"};
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignitems }) => alignitems || "unset"};
  background: #fff;
  color: #0076ff;
  margin-bottom: 40px;
  border-radius: 4px;
  overflow: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

export default Article;
