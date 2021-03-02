import { css } from "@emotion/react";
import * as React from "react";
import LoadingItem from "~components/Layout/LoadingItem";
import OutsideLink from "~components/Navigation/OutsideLink";

const callbacks: Array<any> = [];

function addScript(src: string, cb: () => any) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    const s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = () => callbacks.forEach(cb => cb());
    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

export type Widgets = {
  createDMButton: () => void;
  createFollowButton: () => void;
  createGridFromCollection: () => void;
  createHashtagButton: () => void;
  createMentionButton: () => void;
  createMoment: () => void;
  createPeriscopeOnAirButton: () => void;
  createShareButton: () => void;
  createTimeline: (t: string) => void;
  createTweet: () => void;
  createTweetEmbed: (id: string, ref: any) => Promise<void>;
  createVideo: () => void;
  load: (t: string) => void;
};

export type TweetEmbedProps = {
  className?: string;
  id: string;
  user: string;
};

export type TweetEmbedState = {
  isLoading: boolean;
  error: string;
};

const TweetEmbed = ({ className, id, user }: TweetEmbedProps): JSX.Element => {
  const tweetRef = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<TweetEmbedState>({
    isLoading: true,
    error: ""
  });
  const { isLoading, error } = state;
  const link = `https://twitter.com/${user}/status/${id}`;

  const renderTweet = React.useCallback((): void => {
    try {
      const twttr = (window as any)["twttr"];
      twttr.ready().then(({ widgets }: { widgets: Widgets }) => {
        if (tweetRef && tweetRef.current) {
          widgets
            .createTweetEmbed(id, tweetRef.current)
            .then(() => {
              setState({
                isLoading: false,
                error: ""
              });
            })
            .catch(err => {
              throw Error(err);
            });
        }
      });
    } catch (error) {
      setState({
        isLoading: false,
        error: error.toString()
      });
    }
  }, []);

  React.useEffect(() => {
    const twttr = (window as any)["twttr"];
    if (!(twttr && twttr.ready)) {
      addScript(`https://platform.twitter.com/widgets.js`, renderTweet);
    } else {
      renderTweet();
    }
  }, []);

  return (
    <>
      <OutsideLink href={link}>{link}</OutsideLink>
      {isLoading ? (
        <LoadingItem
          height="550px"
          width="545px"
          borderradius="15px"
          padding="10px 15px 15px 5px"
          margin="10px 0"
        />
      ) : error ? (
        <p
          css={css`
            color: red;
          `}
        >
          {error}
        </p>
      ) : null}
      <div className={className} ref={tweetRef} />
    </>
  );
};

TweetEmbed.defaultProps = {
  protocol: "https:",
  options: {},
  className: null
};

export default TweetEmbed;
