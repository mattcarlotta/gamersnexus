import * as React from "react";
import { css } from "@emotion/react";
import isEmpty from "lodash.isempty";
import { Grow } from "@material-ui/core";
import Details from "~components/Layout/Details";
import Dot from "~components/Layout/Dot";
import Timestamp from "~components/Layout/Timestamp";
import round from "~utils/round";
import LoadingUserCard from "./LoadingUserCard";
import UserCard from "./UserCard";
import UserDropdown from "./UserDropdown";

const initialState = {
  user: {},
  error: "",
  isHoverOver: false
};

export interface PostMetaState {
  user?: {
    avatar?: string;
    description?: string;
    username?: string;
    website?: string;
  };
  error: string;
  isHoverOver: boolean;
}

export interface PostMetaProps {
  avatar?: string;
  date?: string;
  description?: string;
  username: string;
  showViews: boolean;
  updated?: string;
  views: number;
}

class PostMeta extends React.Component<PostMetaProps, PostMetaState> {
  state = initialState;

  componentDidMount(): void {
    document.addEventListener("scroll", this.clearTimer);
  }

  componentWillUnmount(): void {
    document.removeEventListener("scroll", this.clearTimer);
    this.clearTimer();
  }

  postRef = React.createRef<HTMLDivElement>();

  timer: null | ReturnType<typeof setTimeout> = null;

  clearTimer = (): void => {
    if (this.timer) clearTimeout(this.timer);
    if (this.postRef) this.setState(initialState);
  };

  setTimer = (): void => {
    this.timer = setTimeout(this.showUserDetails, 750);
  };

  fetchUserDetails = async (): Promise<void> => {
    await new Promise(res => setTimeout(() => res("resolved"), 1000));

    if (this.postRef)
      this.setState({
        user: {
          avatar: this.props.avatar,
          description:
            this.props.description ||
            "Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.",
          username: this.props.username,
          website: ""
        }
      });
    // let data = {};
    // let error = "";
    // try {
    //   const res = await app.get(`/u/${this.props.username}`);
    //   data = parseData(res);
    // } catch (err) {
    //   error = err;
    //   toast({ type: "error", message: err.toString() });
    // } finally {
    //   if (this.postRef) this.setState({ user: data, error });
    // }
  };

  showUserDetails = (): void =>
    this.setState({ isHoverOver: true }, this.fetchUserDetails);

  render = (): JSX.Element => {
    const { error, isHoverOver, user } = this.state;
    const { date, showViews, updated, username, views } = this.props;

    return (
      <div
        ref={this.postRef}
        style={{
          fontSize: 12,
          color: "#787C7E",
          position: "relative"
        }}
      >
        <Details style={{ textAlign: "center" }}>
          {!!views && <>Posted by&nbsp;</>}
          <div
            css={css`
              display: inline;
              cursor: pointer;
            `}
            onClick={e => e.stopPropagation()}
            onMouseEnter={this.setTimer}
            onMouseLeave={this.clearTimer}
          >
            <span
              css={css`
                text-decoration: underline;
                color: #006ae4;
              `}
            >
              {username}
            </span>
            <Grow
              in={isHoverOver && !error}
              style={{
                transformOrigin: "0 0 0",
                zIndex: !isHoverOver ? -1 : 100,
                opacity: !isHoverOver ? 0 : 1
              }}
              timeout={{ enter: 300, exit: 100 }}
            >
              <UserDropdown views={views}>
                {!isEmpty(user) ? (
                  <UserCard {...user} />
                ) : isHoverOver ? (
                  <LoadingUserCard />
                ) : null}
              </UserDropdown>
            </Grow>
          </div>
        </Details>
        <Dot />
        <Timestamp date={date} width="80px" />
        {showViews && (
          <>
            <Dot />
            <Details>views: {round(views)}</Details>
          </>
        )}
        {updated && (
          <>
            <Dot />
            <Timestamp date={updated} updated width="100px" />
          </>
        )}
      </div>
    );
  };
}

// PostMeta.propTypes = {
//   date: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   showPoints: PropTypes.bool,
//   showViews: PropTypes.bool,
//   updated: PropTypes.string,
//   views: PropTypes.number,
//   votes: PropTypes.number
// };

export default PostMeta;
