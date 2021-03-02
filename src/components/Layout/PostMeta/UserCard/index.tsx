import { css } from "@emotion/react";
import { FaUser } from "react-icons/fa";
import Flex from "~components/Layout/Flex";
import MaskPreview from "~components/Layout/MaskPreview";

export type UserCardProps = {
  avatar?: string;
  description?: string;
  username?: string;
};

const UserCard = ({
  avatar,
  description,
  username
}: UserCardProps): JSX.Element => (
  <div
    css={css`
      padding: 12px;
    `}
  >
    <Flex justify="left" style={{ marginBottom: 5 }}>
      {avatar ? (
        <img
          css={css`
            max-height: 55px;
            max-width: 55px;
            display: block;
            margin-right: 10px;
          `}
          src={avatar}
          alt="avatar.png"
        />
      ) : (
        <FaUser style={{ marginRight: 10, fontSize: 55 }} />
      )}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `}
      >
        <div
          css={css`
            font-size: 16px;
          `}
        >
          {username}
        </div>
      </div>
    </Flex>
    <MaskPreview
      maxHeight={80}
      maskHeight={35}
      minHeight={80}
      fallback="This user hasn't provided a description."
    >
      {description}
    </MaskPreview>
  </div>
);

export default UserCard;
