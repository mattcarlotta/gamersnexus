import Router from "next/router";
import Center from "~components/Layout/Center";
import ErrorMessage from "~components/Layout/ErrorMessage";
import ErrorStatus from "~components/Layout/ErrorStatus";
import Flex from "~components/Layout/Flex";
import HomeIcon from "~components/Layout/HomeIcon";
import Button from "~components/Layout/Button";
import Header from "~components/Navigation/Header";
import { NextPage } from "~types";

const NotFound: NextPage = () => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    style={{ height: "80vh" }}
    id="notfound"
  >
    <Header title="Not Found" />
    <Center
      style={{
        color: "#fff",
        background: "#0076ff",
        boxShadow: "0 4px 14px 0 rgba(130, 130, 130, 0.19)",
        padding: 40,
        borderRadius: 4
      }}
    >
      <img
        style={{ marginBottom: "10px", width: "625px" }}
        src="/images/gnLogo.png"
        alt="gnLogo.png"
      />
      <ErrorStatus>Page Not Found</ErrorStatus>
      <ErrorMessage>
        We&#39;re sorry, but the page you&#39;ve requested was not found.
      </ErrorMessage>
      <Button
        ariaLabel="Go Back Button"
        type="button"
        onClick={() => Router.back()}
      >
        <HomeIcon />
        <span>Go Back</span>
      </Button>
    </Center>
  </Flex>
);

export default NotFound;
