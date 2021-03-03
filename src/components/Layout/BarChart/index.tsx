import * as React from "react";
import { css } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";
// import ChartLabelFormat from "./ChartLabelFormat";
import ChartTitle from "./ChartTitle";
import ChartTooltip from "./ChartTooltip";

export type BarChart = {
  bottomLabel: string;
  bottomFormat: (t: any) => any;
  colors: Array<string>;
  data: Array<any>;
  height: string;
  keys: Array<string>;
  padding?: number;
  subtitle: string;
  title: string;
  margin?: Record<string, unknown>;
};

export type BarChartState = {
  activeColors: Array<string>;
  activeKeys: Array<string>;
};

export type BarData = {
  id: string | number;
  label: string;
  color: string;
};

const BarChart = ({
  bottomLabel,
  bottomFormat,
  colors,
  data,
  height,
  keys,
  margin,
  padding,
  subtitle,
  title
}: BarChart): JSX.Element => {
  const [state, setState] = React.useState({
    activeColors: colors,
    activeKeys: keys
  });
  const key = state.activeKeys[0];
  const largestValue = data.reduce((a, b) => (a > b[key] ? a : b[key]));
  const maxValue = Math.ceil((largestValue + 1) / 10) * 10;

  const handleLabelClick = React.useCallback(
    (data: BarData): void => {
      setState(prevState => {
        const foundIndex = prevState.activeKeys.findIndex(
          key => key === data.id
        );
        const isFiltered = prevState.activeKeys.length === 1;

        return {
          activeKeys: isFiltered ? keys : [keys[foundIndex]],
          activeColors: isFiltered ? colors : [colors[foundIndex]]
        };
      });
    },
    [keys, colors]
  );

  return (
    <div
      css={css`
        height: ${height};
        width: 100%;
        background: #434343;
        margin: 10px auto;
        position: relative;
      `}
    >
      <ResponsiveBar
        data={data}
        borderRadius={2}
        keys={state.activeKeys}
        colors={state.activeColors}
        tooltip={ChartTooltip}
        layers={[
          "grid",
          "axes",
          "bars",
          "markers",
          "legends",
          () => <ChartTitle title={title} subtitle={subtitle} />
        ]}
        indexBy="id"
        // labelFormat={ChartLabelFormat}
        margin={margin}
        padding={padding || 0.15}
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
          },
          tooltip: {
            container: {
              background: "#333"
            }
          }
        }}
        groupMode="grouped"
        layout="horizontal"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 50
        }}
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
        maxValue={maxValue || "auto"}
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
            translateX: 125,
            translateY: 0,
            itemsSpacing: 8,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 20,
            onClick: handleLabelClick,
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
};

export default BarChart;
