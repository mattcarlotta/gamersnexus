import { css } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";
import ChartTitle from "./ChartTitle";

export type BarChart = {
  bottomLabel: string;
  bottomFormat: (t: any) => any;
  data: Array<any>;
  height: string;
  keys: Array<string>;
  maxValue?: number;
  subtitle: string;
  title: string;
  margin?: Record<string, unknown>;
};

const BarChart = ({
  bottomLabel,
  bottomFormat,
  data,
  height,
  keys,
  margin,
  maxValue,
  subtitle,
  title
}: BarChart): JSX.Element => (
  <div
    css={css`
      height: ${height};
      width: 100%;
      background: #434343;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    `}
  >
    <ResponsiveBar
      data={data}
      borderRadius={2}
      labelFormat={d =>
        ((
          <tspan style={{ fill: "#000", fontSize: 11 }}>{d}</tspan>
        ) as unknown) as string
      }
      keys={keys}
      layers={[
        "grid",
        "axes",
        "bars",
        "markers",
        "legends",
        () => <ChartTitle title={title} subtitle={subtitle} />
      ]}
      indexBy="id"
      margin={margin}
      padding={0.15}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: "#fff"
            }
          },
          legend: {
            text: {
              fontSize: 14,
              fill: "#fff"
            }
          }
        },
        labels: {
          text: {
            fill: "#000",
            background: "#000"
          }
        },
        grid: {
          line: {
            stroke: "#888",
            strokeWidth: 0.75
          }
        },
        legends: {
          text: {
            fill: "#fff"
          }
        }
      }}
      groupMode="grouped"
      layout="horizontal"
      colors={["#4285F4", "#E06666", "#F6B26B"]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: bottomLabel,
        legendPosition: "middle",
        legendOffset: 50,
        format: bottomFormat
      }}
      maxValue={maxValue}
      enableGridX
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 140,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

export default BarChart;
