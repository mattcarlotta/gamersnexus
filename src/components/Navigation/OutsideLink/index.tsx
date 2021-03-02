import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "~types";

export type OutsideLinkProps = {
  className?: string;
  children: string | ReactNode;
  dataTestId?: string;
  href: string;
  style?: CSSProperties;
};

const OutsideLinkComponent = ({
  className,
  children,
  dataTestId,
  href,
  style
}: OutsideLinkProps): JSX.Element => (
  <a
    aria-label="link to outside source"
    data-testid={dataTestId}
    className={className}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    style={style}
  >
    {children}
  </a>
);

const OutsideLink = styled(OutsideLinkComponent)`
  padding: 0 3px;
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: #015eca;
  }

  :focus {
    color: #1295f3;
    outline: none !important;
  }
`;

export default OutsideLink;
