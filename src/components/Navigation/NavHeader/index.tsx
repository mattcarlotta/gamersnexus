/* istanbul ignore file */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import Input from "~components/Forms/Input";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import Link from "~components/Navigation/Link";

export type HeaderProps = {
  className?: string;
};

const TABS = [
  "news",
  "benches",
  "guides",
  "builds",
  "gaming",
  "dictionary",
  "forum",
  "patreon",
  "store"
];

const HeaderComponent = ({ className }: HeaderProps): JSX.Element => {
  const router = useRouter();
  const isActive = TABS.find(tab => router.pathname.indexOf(tab) >= 1);

  return (
    <header className={className}>
      <FlexStart>
        <Link href="/" margin="0 15px 0 0" padding="0" borderradius="50px">
          <img
            css={css`
              display: flex;
              height: 50px;
            `}
            src="/logo_192x192.png"
            alt="gamersNexusLogo.png"
          />
        </Link>
        {TABS.map(tab => (
          <Link
            primary
            key={tab}
            active={tab === isActive}
            display="flex"
            href={`/${tab}`}
            padding="2px 5px"
            margin="0 10px 0 0"
          >
            {tab}
          </Link>
        ))}
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
};

const Header = styled(HeaderComponent)`
  @media (max-width: 1200px) {
    position: fixed;
    width: 100%;
  }

  z-index: 1000;
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
