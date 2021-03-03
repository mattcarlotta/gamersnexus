const ChartTooltip = (labelValue: string | number): string =>
  ((
    <tspan
      style={{
        background: "rgb(0, 0, 0)",
        fontFamily: "sans-serif",
        fontSize: 11,
        pointerEvents: "none"
      }}
    >
      {parseInt(String(labelValue), 10).toFixed(2)}
    </tspan>
  ) as unknown) as string;

export default ChartTooltip;
