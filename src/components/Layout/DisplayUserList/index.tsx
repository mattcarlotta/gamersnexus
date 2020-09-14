import isEmpty from "lodash.isempty";
import UserForm from "~components/Forms/UserForm";
import Card from "~components/Layout/Card";
import Container from "~components/Layout/Container";
import NoData from "~components/Layout/NoData";
import { DisplayUserListProps, UserData } from "~types";

const DisplayUserList = ({
  data,
  isEditingID,
  handleCloseModal,
  handleEditClick,
  handleResetEditClick,
  updateUser,
  deleteUser,
  ...rest
}: DisplayUserListProps) => (
  <>
    {!isEmpty(data) ? (
      data.map((props: UserData, idx) => (
        <Container data-testid="user-card" key={props._id}>
          {isEditingID !== props._id ? (
            <Card
              {...props}
              {...rest}
              key={props._id}
              _id={props._id}
              address={props.address}
              idx={idx}
              handleEditClick={handleEditClick}
              deleteUser={deleteUser}
            />
          ) : (
            <UserForm
              {...props}
              {...rest}
              key={props._id}
              cancelForm={handleResetEditClick}
              resetForm={handleCloseModal}
              submitAction={updateUser}
            />
          )}
        </Container>
      ))
    ) : (
      <NoData />
    )}
  </>
);

export default DisplayUserList;
