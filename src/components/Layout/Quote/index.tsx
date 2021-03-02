import styled from "@emotion/styled";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ReactNode } from "react";

export type QuoteProps = {
  className?: string;
  children: ReactNode;
};

const QuoteComponent = ({ className, children }: QuoteProps): JSX.Element => (
  <div className={className}>
    <FaQuoteLeft style={{ fontSize: 15, marginRight: 5, color: "#777" }} />
    {children}
    <FaQuoteRight style={{ fontSize: 15, marginLeft: 10, color: "#777" }} />
  </div>
);

const Quote = styled(QuoteComponent)`
  font-family: "Poppins Italic", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  padding-left: 10px;
`;

export default Quote;
