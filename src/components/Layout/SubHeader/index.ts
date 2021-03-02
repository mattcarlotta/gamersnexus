import styled from "@emotion/styled";

const SubHeader = styled.div<{ nohover?: boolean }>`
  cursor: ${({ nohover }) => (nohover ? "default" : "pointer")};
  margin-top: 20px;
  margin-bottom: -10px;
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
