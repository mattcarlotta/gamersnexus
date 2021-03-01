/* istanbul ignore file */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaSearch } from "react-icons/fa";
import Input from "~components/Forms/Input";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import Link from "~components/Navigation/Link";

export type HeaderProps = {
  className?: string;
};

const HeaderComponent = ({ className }: HeaderProps): JSX.Element => (
  <header className={className}>
    <FlexStart>
      <Link href="/" margin="0 20px 0 0" padding="0" borderradius="50px">
        <img
          css={css`
            display: flex;
            height: 40px;
          `}
          src="/logo_192x192.png"
          alt="gnLogo.png"
        />
      </Link>
      <Link
        display="flex"
        href="/news"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        News
      </Link>
      <Link
        display="flex"
        href="/game-bench"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Game Bench
      </Link>
      <Link
        display="flex"
        href="/game-bench"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Hardware Guides
      </Link>
      <Link
        display="flex"
        href="/pc-builds"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        PC Builds
      </Link>
      <Link
        display="flex"
        href="/gaming"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Gaming
      </Link>
      <Link
        display="flex"
        href="/dictionary"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Specs Dictionary
      </Link>
      <Link
        display="flex"
        href="/forum"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Tech Forum
      </Link>
      <Link
        display="flex"
        href="/patreon"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Patreon
      </Link>
      <Link
        display="flex"
        href="/store"
        padding="5px"
        margin="0 10px 0 0"
        borderradius="50px"
      >
        Store
      </Link>
    </FlexStart>
    <FlexEnd>
      <form
        css={css`
          display: flex;
        `}
        onSubmit={e => e.preventDefault()}
      >
        <button
          css={css`
            text-align: center;
            transition: all 200ms ease-in-out 0s;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            border: 0;
            background: transparent;
            padding: 0px 4px;
            font-size: 15px;
            color: #f7f7f7;
          `}
          type="submit"
        >
          <FaSearch style={{ fontSize: 18 }} />
        </button>
        <Input
          height="35px"
          width="250px"
          type="text"
          placeholder="Search..."
        />
      </form>
    </FlexEnd>
  </header>
);

const Header = styled(HeaderComponent)`
  @media (max-width: 1200px) {
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: #0076ff;
  height: 60px;
  padding-right: 30px;
  padding-left: 30px;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
`;

export default Header;
