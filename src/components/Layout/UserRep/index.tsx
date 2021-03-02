import styled from "@emotion/styled";

export type UserRepProps = {
  className?: string;
};

const UserRepComponent = ({ className }: UserRepProps): JSX.Element => (
  <div className={className}>
    <span className="user-reputation">&#10026;</span>
  </div>
);

const UserRep = styled(UserRepComponent)`
  color: #1c1c1c;
  & .user-reputation {
    color: #ff0000;
    margin-right: 5px;
    font-size: 13px;
  }
`;

export default UserRep;
