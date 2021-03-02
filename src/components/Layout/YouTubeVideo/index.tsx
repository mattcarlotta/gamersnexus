import { RefObject } from "~types";

export type YouTubeVideoProps = {
  autoPlay: number;
  innerRef: RefObject<HTMLIFrameElement>;
  id: string;
  startTime: number;
};

const YouTubeVideo = ({
  autoPlay,
  innerRef,
  id,
  startTime
}: YouTubeVideoProps): JSX.Element => (
  <iframe
    ref={innerRef}
    src={`https://www.youtube.com/embed/${id}?start=${startTime}&autoplay=${autoPlay}`}
    width="640"
    height="390"
    allowFullScreen
    title="video"
  />
);

YouTubeVideo.defaultProps = {
  autoPlay: 0,
  startTime: 0
};

export default YouTubeVideo;
