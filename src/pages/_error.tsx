import { MdRefresh } from "react-icons/md";
import Center from "~components/Layout/Center";
import ErrorMessage from "~components/Layout/ErrorMessage";
import ErrorStatus from "~components/Layout/ErrorStatus";
import Flex from "~components/Layout/Flex";
import Header from "~components/Navigation/Header";
import Link from "~components/Navigation/Link";
import { NextPage } from "~types";

const ServerError: NextPage = () => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    style={{ height: "80vh" }}
    id="notfound"
  >
    <Header title="Server Error" />
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
      <ErrorStatus>Server Error</ErrorStatus>
      <ErrorMessage style={{ marginBottom: 5 }}>
        We&#39;re sorry, but the website appears to be unavailable.
      </ErrorMessage>
      <ErrorMessage>Please wait a few minutes before refresing.</ErrorMessage>
      <Link tertiary href="/" replace>
        <MdRefresh
          style={{
            position: "relative",
            top: 4,
            fontSize: 20,
            marginRight: 8
          }}
        />
        <span>Refresh</span>
      </Link>
    </Center>
  </Flex>
);

export default ServerError;
