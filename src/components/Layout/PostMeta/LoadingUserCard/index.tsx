import { css } from "@emotion/react";
import FadeIn from "~components/Layout/FadeIn";
import LoadingItem from "~components/Layout/LoadingItem";

const LoadingUserCard = (): JSX.Element => (
  <FadeIn>
    <div
      css={css`
        padding: 12px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <LoadingItem height="55px" margin="0 10px 0 0" width="55px" />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          `}
        >
          <LoadingItem height="20px" margin="0 0 5px 0" width="208px" />
          <LoadingItem height="15px" margin="0 0 5px 0" width="208px" />
          <LoadingItem height="10px" margin="0" width="208px" />
        </div>
      </div>
      <LoadingItem height="73px" margin="5px 0 0 0" width="273px" />
    </div>
  </FadeIn>
);

export default LoadingUserCard;
