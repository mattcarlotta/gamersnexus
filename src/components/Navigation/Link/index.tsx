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
  active?: boolean;
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
  secondary?: boolean;
}>`
  display: ${({ display }) => display};
  cursor: pointer;
  color: ${({ active, primary, secondary }) => {
    if (active) return "#0076ff";
    if (primary) return "#fff";
    if (secondary) return "#fff";
    return "#fff";
  }};
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  background: ${({ active, primary, secondary }) => {
    if (active) return "#d7eaff";
    if (primary) return "#transparent";
    if (secondary) return "#015eca";
    return "#0076ff";
  }};
  border: ${({ primary, secondary }) => {
    if (primary) return "1px solid transparent";
    if (secondary) return "1px solid #0076ff";
    return "1px solid #0076ff";
  }};
  box-shadow: ${({ primary, secondary }) => {
    if (primary) return "none";
    if (secondary) return "0 4px 14px 0 rgba(0, 119, 255, 0.452)";
    return "0 4px 14px 0 rgba(0, 118, 255, 0.39)";
  }};
  padding: ${({ padding }) => padding || "10px 40px"};
  border-radius: ${({ borderradius }) => borderradius || "4px"};
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 500;

  :hover {
    background: ${({ primary, secondary }) => {
      if (primary) return "#d7eaff";
      if (secondary) return "#0076ff";
      return "#ddd";
    }};
    border: ${({ active, primary, secondary }) => {
      if (active) return "1px solid #8caffb";
      if (primary) return "1px solid transparent";
      if (secondary) return "1px solid #0076ff";
      return "1px solid #0076ff";
    }};
    color: ${({ primary, secondary }) => {
      if (primary) return "#0076ff";
      if (secondary) return "#fff";
      return "#fff";
    }};
    box-shadow: ${({ primary, secondary }) => {
      if (primary) return "none";
      if (secondary) return "0 4px 14px 0 rgba(0, 119, 255, 0.452)";
      return "0 4px 14px 0 rgba(0, 118, 255, 0.39)";
    }};
  }

  :focus {
    outline: 0;
  }
`;

export default Link;
