import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { FaLink } from "react-icons/fa";
import Link from "~components/Navigation/Link";
import { ReactNode } from "~types";

export type SubHeaderProps = {
  className?: string;
  children: ReactNode;
  id: string;
};

const SubHeaderComponent = ({
  className,
  children,
  id
}: SubHeaderProps): JSX.Element => {
  const router = useRouter();
  const basePath = router.asPath.split("#")[0];

  return (
    <Link normal padding="0" margin="0" href={`${basePath}#${id}`} shallow>
      <h3 className={className} id={id}>
        {children} <FaLink />
      </h3>
    </Link>
  );
};
const SubHeader = styled(SubHeaderComponent)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-block-start: 30px;
  margin-block-end: 0;
  padding: 0;
  font-size: 22px;
  font-family: "Poppins Bold", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  color: #0076ff;

  svg {
    opacity: 0;
  }

  :hover {
    svg {
      opacity: 1;
    }
  }
`;

export default SubHeader;

/*
import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import FlexStart from "~components/Layout/FlexStart";
import PlayButton from "~components/Layout/PlayButton";
import { ChangeEvent, ReactNode } from "~types";

export type SubHeaderProps = {
  className?: string;
  children: ReactNode;
  id: string;
  onClick?: (e: ChangeEvent<any>) => void;
  title?: string;
  value?: string;
};

const SubHeaderComponent = ({
  className,
  children,
  onClick,
  id,
  title,
  value
}: SubHeaderProps): JSX.Element => (
  <FlexStart margin="10px 0 0 0">
    <div className={className} id={id}>
      {children}
    </div>
    {title && value && onClick ? (
      <>
        <span
          css={css`
            font-size: 20px;
            margin: 0 8px;
            font-weight: bold;
          `}
        >
          |
        </span>
        <PlayButton title={title} value={value} onClick={onClick} />
      </>
    ) : null}
  </FlexStart>
);

const SubHeader = styled(SubHeaderComponent)<{ nohover?: boolean }>`
  display: flex;
  cursor: ${({ nohover }) => (nohover ? "default" : "pointer")};
  font-size: 20px;
  font-family: "Poppins Bold", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  color: #0076ff;

  :hover {
    text-decoration: ${({ nohover }) => !nohover && "underline"};
  }
`;

export default SubHeader;
*/
