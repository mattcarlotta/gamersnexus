import NextLink from "next/link";
import styled from "@emotion/styled";
import { LinkProps } from "~types";

const LinkComponent = ({ children, className, href }: LinkProps) => (
  <NextLink href={href} prefetch={false} passHref>
    <a data-testid="link" className={className}>
      {children}
    </a>
  </NextLink>
);

const Link = styled(LinkComponent)<{
  display?: string;
  color?: string;
  background?: string;
  border?: string;
  borderradius?: string;
  boxshadow?: string;
  hoverbackground?: string;
  margin?: string;
  padding?: string;
  primary?: boolean;
}>`
  display: ${({ display }) => display};
  cursor: pointer;
  color: ${({ primary }) => (primary ? "#0076ff" : "#fff")};
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${({ primary }) => (primary ? "transparent" : "#0076ff")};
  border: ${({ primary }) => (primary ? "0" : "1px solid #0076ff")};
  box-shadow: ${({ primary }) =>
    primary ? "none" : " 0 4px 14px 0 rgba(0, 118, 255, 0.39)"};
  padding: ${({ padding }) => padding || "10px 40px"};
  border-radius: ${({ borderradius }) => borderradius || "4px"};
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 500;

  :hover {
    background: ${({ primary }) => (primary ? "#ddd" : "#fff")};
    color: #0076ff;
  }

  :focus {
    outline: 0;
  }
`;

export default Link;
