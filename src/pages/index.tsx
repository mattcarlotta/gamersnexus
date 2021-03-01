import * as React from "react";
import Flex from "~components/Layout/Flex";
import Link from "~components/Navigation/Link";
import SubTitle from "~components/Layout/SubTitle";
import Header from "~components/Navigation/Header";
import { NextPage } from "~types";

const Home: NextPage = () => (
  <>
    <Header title="Home" url="/" />
    <Flex
      data-testid="not-found-page"
      justify="center"
      direction="column"
      height="80vh"
    >
      <img
        style={{ marginBottom: "10px", width: "625px" }}
        src="/images/gnLogo.png"
        alt="gnLogo.png"
      />
      <SubTitle>
        PC hardware reviews, game benchmarks, and component analysis.
      </SubTitle>
      <Link secondary href="/news">
        View Latest News
      </Link>
    </Flex>
  </>
);

export default Home;
