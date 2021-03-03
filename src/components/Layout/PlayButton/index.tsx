import styled from "@emotion/styled";
import { FaPlayCircle } from "react-icons/fa";
import timeInSeconds from "~utils/timeInSeconds";
import { ChangeEvent } from "~types";

export type PlayButtonProps = {
  className?: string;
  onClick: (e: ChangeEvent<any>) => void;
  title: string;
};

const PlayButtonComponent = ({
  className,
  onClick,
  title
}: PlayButtonProps): JSX.Element => (
  <div
    className={className}
    data-value={timeInSeconds(title)}
    onClick={onClick}
  >
    <FaPlayCircle style={{ marginRight: 5 }} />
    {title}
  </div>
);

const PlayButton = styled(PlayButtonComponent)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  :hover {
    svg {
      color: #2f8fff;
    }
    color: #2f8fff;
    text-decoration: underline;
  }
`;

export default PlayButton;
