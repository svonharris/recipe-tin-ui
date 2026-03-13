import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  title?: string;
  titleId?: string;
};
const SvgCheckboxIconDisabled = React.forwardRef(
  (
    { size = 24, color = "currentColor", title, titleId, ...props }: IconProps,
    ref: React.Ref<SVGSVGElement>,
  ) => (
    <svg
      width={size}
      height={size}
      style={{ color }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x={4.5}
        y={4.5}
        width={15}
        height={15}
        rx={3.5}
        stroke="currentColor"
      />
    </svg>
  ),
);
SvgCheckboxIconDisabled.displayName = "SvgCheckboxIconDisabled";
export default SvgCheckboxIconDisabled;
