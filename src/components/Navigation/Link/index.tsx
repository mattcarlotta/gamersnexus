import NextLink from "next/link";
import styled from "@emotion/styled";
import { ReactNode } from "~types";

export type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  replace?: boolean;
  shallow?: boolean;
  stopPropagation?: boolean;
};

const LinkComponent = ({
  children,
  className,
  href,
  replace,
  shallow,
  stopPropagation
}: LinkProps) => (
  <NextLink
    href={href}
    prefetch={false}
    passHref
    replace={replace}
    shallow={shallow}
  >
    <a
      data-testid="link"
      onClick={stopPropagation ? e => e.stopPropagation() : undefined}
      className={className}
    >
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
  fontweight?: string;
  height?: string;
  hoverbackground?: string;
  margin?: string;
  padding?: string;
  normal?: boolean;
  noglow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tag?: boolean;
  tertiary?: boolean;
  texttransform?: string;
}>`
  display: ${({ display }) => display};
  cursor: pointer;
  color: ${({ active, normal, primary, secondary, tag, tertiary }) => {
    if (active) return "#0076ff";
    if (normal) return "#0076ff";
    if (primary) return "#fff";
    if (secondary) return "#fff";
    if (tertiary) return "#0076ff";
    if (tag) return "#fff";
    return "#fff";
  }};
  font-size: ${({ fontsize }) => fontsize || "16px"};
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: ${({ texttransform }) => texttransform || "uppercase"};
  background: ${({ active, normal, primary, secondary, tag, tertiary }) => {
    if (active) return "#f4f4f4";
    if (normal) return "transparent";
    if (primary) return "transparent";
    if (secondary) return "#015eca";
    if (tertiary) return "#1e1e1e";
    if (tag) return "#015eca";
    return "#0076ff";
  }};
  border: ${({ border, primary, normal, secondary, tag, tertiary }) => {
    if (border) return border;
    if (normal || tag) return "0";
    if (primary) return "1px solid transparent";
    if (secondary) return "1px solid #0076ff";
    if (tertiary) return "1px solid #1e1e1e";
    return "1px solid #0076ff";
  }};
  box-shadow: ${({ noglow, normal, primary, secondary, tag }) => {
    if (noglow || normal || tag) return "none";
    if (primary) return "none";
    if (secondary) return "0 4px 14px 0 rgba(0, 119, 255, 0.452)";
    return "0 4px 14px 0 rgba(0, 118, 255, 0.39)";
  }};
  padding: ${({ padding }) => padding || "10px 40px"};
  border-radius: ${({ borderradius }) => borderradius || "4px"};
  margin: ${({ margin }) => margin || "0px"};
  height: ${({ height }) => height || "auto"};
  font-weight: ${({ fontweight }) => fontweight || "500"};

  :hover {
    background: ${({ normal, primary, secondary, tag, tertiary }) => {
      if (normal) return "transparent";
      if (primary) return "#d7eaff";
      if (secondary) return "#0076ff";
      if (tertiary) return "#1e1e1e";
      if (tag) return "#0066dc";
      return "#015eca";
    }};
    border: ${({ active, normal, primary, secondary, tag, tertiary }) => {
      if (active) return "1px solid #8caffb";
      if (normal || tag) return "0";
      if (primary) return "1px solid transparent";
      if (secondary) return "1px solid #0076ff";
      if (tertiary) return "";
      return "1px solid #0076ff";
    }};
    color: ${({ normal, primary, secondary, tertiary }) => {
      if (normal) return "#0076ff";
      if (primary) return "#0076ff";
      if (secondary) return "#fff";
      if (tertiary) return "#fff";
      return "#fff";
    }};
    box-shadow: ${({ noglow, normal, primary, secondary, tag }) => {
      if (noglow || normal) return "none";
      if (primary || tag) return "none";
      if (secondary) return "0 4px 14px 0 rgba(0, 119, 255, 0.452)";
      return "0 4px 14px 0 rgba(0, 118, 255, 0.39)";
    }};
  }

  :focus {
    outline: 0;
  }
`;

export default Link;
