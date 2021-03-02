import * as React from "react";
import Gradient from "./Gradient";
import { ReactNode } from "~types";

export type MaskPreviewProps = {
  children: ReactNode;
  fallback?: ReactNode;
  maxHeight: number;
  maskHeight: number;
  minHeight: number;
};

const MaskPreview = ({
  fallback,
  children,
  maxHeight,
  maskHeight,
  minHeight
}: MaskPreviewProps): JSX.Element => {
  const [height, setHeight] = React.useState(0);

  const setMaskHeight = React.useCallback(
    node =>
      setHeight(prevState =>
        node ? Math.ceil(node.getBoundingClientRect().height) : prevState
      ),
    [setHeight]
  );

  return (
    <Gradient
      ref={setMaskHeight}
      height={height}
      maxHeight={maxHeight}
      maskHeight={maskHeight}
      minHeight={minHeight}
    >
      {children || fallback}
    </Gradient>
  );
};

MaskPreview.defaultProps = {
  maxHeight: 150,
  maskHeight: 10,
  minHeight: 1
};

export default MaskPreview;
