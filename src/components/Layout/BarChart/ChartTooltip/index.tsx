import { BarTooltipDatum } from "@nivo/bar";

const ChartTooltip = ({
  id,
  value,
  color,
  data
}: BarTooltipDatum): JSX.Element => (
  <strong style={{ color }}>
    {data.id} | {id}: {value}
  </strong>
);

export default ChartTooltip;
