import * as React from "react";

export type ChartTitleProps = {
  title: string;
  subtitle: string;
};

const ChartTitle = ({ title, subtitle }: ChartTitleProps): JSX.Element => (
  <>
    <text
      textAnchor="middle"
      x={175}
      y={-34}
      style={{ fontSize: 14, fill: "#eee", fontWeight: 600 }}
    >
      {title}
    </text>
    <text
      textAnchor="middle"
      x={144}
      y={-18}
      style={{ fontSize: 12, fill: "#888", fontWeight: 600 }}
    >
      {subtitle}
    </text>
  </>
);

export default ChartTitle;
