import styled from "@emotion/styled";

const UserDropdown = styled.div<{ views?: number }>`
  cursor: default;
  position: absolute;
  top: 0px;
  left: ${({ views }) => (views ? "57px" : "0px")};
  border-radius: 4px;
  min-height: 80px;
  width: 300px;
  z-index: 100;
  margin-top: -1px;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;

export default UserDropdown;
