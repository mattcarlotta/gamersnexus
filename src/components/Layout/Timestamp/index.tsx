import * as React from "react";
import { NoSsr } from "@material-ui/core";
import Details from "~components/Layout/Details";
import LoadingItem from "~components/Layout/LoadingItem";
import Tooltip from "~components/Layout/Tooltip";
import dayjs from "~utils/dayjs";

export interface TimestampState {
  date: string;
  title: string;
}

export interface TimestampProps {
  date?: string;
  updated?: boolean;
  width?: string;
}

class Timestamp extends React.Component<TimestampProps, TimestampState> {
  constructor(props: TimestampProps) {
    super(props);

    this.state = {
      date: dayjs(props.date).fromNow(),
      title: dayjs(props.date).format("MMMM Do, YYYY @ hh:mma")
    };
  }

  componentDidMount(): void {
    this.setUpdateInterval();
  }

  shouldComponentUpdate = (
    nextProps: TimestampProps,
    nextState: TimestampState
  ): boolean =>
    nextProps.date !== this.props.date || nextState.date !== this.state.date;

  componentDidUpdate(prevProps: TimestampProps): void {
    const { date } = this.props;
    if (prevProps.date !== date && this.timeRef) {
      this.removeUpdates();
      this.setState(
        { date: dayjs(this.props.date).fromNow() },
        this.setUpdateInterval
      );
    }
  }

  componentWillUnmount(): void {
    this.removeUpdates();
  }

  timeRef = React.createRef<HTMLSpanElement>();

  timestampInterval: null | ReturnType<typeof setTimeout> = null;

  removeUpdates = (): void => {
    if (this.timestampInterval) clearInterval(this.timestampInterval);
  };

  setUpdateInterval = (): void => {
    this.timestampInterval = setInterval(() => {
      if (this.timeRef && this.timeRef.current)
        this.setState({ date: dayjs(this.props.date).fromNow() });
    }, 60000);
  };

  render = (): JSX.Element => (
    <NoSsr
      fallback={
        <LoadingItem height="15px" width={this.props.width} margin="0 3px 0" />
      }
    >
      <Tooltip title={this.state.title}>
        <Details ref={this.timeRef}>
          {this.props.updated && <>Updated </>}
          {this.state.date}
        </Details>
      </Tooltip>
    </NoSsr>
  );
}

export default Timestamp;
