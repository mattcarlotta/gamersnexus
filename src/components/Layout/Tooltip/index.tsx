import { Tooltip } from "@material-ui/core";
import { ReactNode } from "~types";

export type CustomTooltipProps = {
  children: ReactNode;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  title: any;
};

const CustomTooltip = ({
  children,
  placement,
  title
}: CustomTooltipProps): JSX.Element => (
  <Tooltip
    arrow
    classes={{ tooltip: "tooltip-container", arrow: "tooltip-arrow" }}
    placement={placement}
    title={title}
  >
    <span>{children}</span>
  </Tooltip>
);

CustomTooltip.defaultProps = {
  placement: "top"
};

export default CustomTooltip;
