import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  title?: string;
  titleId?: string;
};
const SvgFilter01 = React.forwardRef(
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
      <path
        d="M3 8H6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16H9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 16H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8L21 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={15} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={9} cy={8} r={3} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  ),
);
SvgFilter01.displayName = "SvgFilter01";
export default SvgFilter01;
