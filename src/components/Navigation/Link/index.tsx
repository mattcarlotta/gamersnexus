import NextLink from "next/link";
import styled from "@emotion/styled";
import { LinkProps } from "~types";

const LinkComponent = ({ children, className, href, replace }: LinkProps) => (
  <NextLink href={href} prefetch={false} passHref replace={replace}>
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
  fontsize?: string;
  hoverbackground?: string;
  margin?: string;
  padding?: string;
  normal?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}>`
  display: ${({ display }) => display};
  cursor: pointer;
  color: ${({ active, normal, primary, secondary, tertiary }) => {
    if (active) return "#0076ff";
    if (normal) return "#0076ff";
    if (primary) return "#fff";
    if (secondary) return "#fff";
    if (tertiary) return "#0076ff";
    return "#fff";
  }};
  font-size: ${({ fontsize }) => fontsize || "16px"};
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  background: ${({ active, normal, primary, secondary, tertiary }) => {
    if (active) return "#d7eaff";
    if (normal) return "transparent";
    if (primary) return "#transparent";
    if (secondary) return "#015eca";
    if (tertiary) return "#1e1e1e";
    return "#0076ff";
  }};
  border: ${({ primary, normal, secondary, tertiary }) => {
    if (primary) return "1px solid transparent";
    if (normal) return "0";
    if (secondary) return "1px solid #0076ff";
    if (tertiary) return "1px solid #1e1e1e";
    return "1px solid #0076ff";
  }};
  box-shadow: ${({ normal, primary, secondary }) => {
    if (normal) return "none";
    if (primary) return "none";
    if (secondary) return "0 4px 14px 0 rgba(0, 119, 255, 0.452)";
    return "0 4px 14px 0 rgba(0, 118, 255, 0.39)";
  }};
  padding: ${({ padding }) => padding || "10px 40px"};
  border-radius: ${({ borderradius }) => borderradius || "4px"};
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 500;

  :hover {
    background: ${({ normal, primary, secondary, tertiary }) => {
      if (normal) return "transparent";
      if (primary) return "#d7eaff";
      if (secondary) return "#0076ff";
      if (tertiary) return "#1e1e1e";
      return "#ddd";
    }};
    border: ${({ active, normal, primary, secondary, tertiary }) => {
      if (active) return "1px solid #8caffb";
      if (normal) return "0";
      if (primary) return "1px solid transparent";
      if (secondary) return "1px solid #0076ff";
      if (tertiary) return "";
      return "1px solid #0076ff";
    }};
    color: ${({ normal, primary, secondary, tertiary }) => {
      if (normal) return "#015eca";
      if (primary) return "#0076ff";
      if (secondary) return "#fff";
      if (tertiary) return "#fff";
      return "#fff";
    }};
    box-shadow: ${({ normal, primary, secondary }) => {
      if (normal) return "none";
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
