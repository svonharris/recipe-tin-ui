import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
  color?: string,
  title?: string,
  titleId?: string,
};
const SvgRadioIconSelectedDisabled = React.forwardRef(
  (
    { size = 24, color = "currentColor", title, titleId, ...props }: IconProps,
    ref: React.Ref<SVGSVGElement>
  ) => (
    <svg
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
        rx={7.5}
        stroke="currentColor"
      />
      <rect x={7} y={7} width={10} height={10} rx={5} fill="currentColor" />
    </svg>
  )
);
SvgRadioIconSelectedDisabled.displayName = "SvgRadioIconSelectedDisabled";
export default SvgRadioIconSelectedDisabled;
