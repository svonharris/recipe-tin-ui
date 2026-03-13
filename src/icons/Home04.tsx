import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  title?: string;
  titleId?: string;
};
const SvgHome04 = React.forwardRef(
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
        d="M21 17.9668V10.1503C21 8.93937 20.4604 7.7925 19.5301 7.02652L14.5301 2.90935C13.0577 1.69688 10.9423 1.69689 9.46986 2.90935L4.46986 7.02652C3.53964 7.7925 3 8.93937 3 10.1503V17.9668C3 20.1943 4.79086 22 7 22H17C19.2091 22 21 20.1943 21 17.9668Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M10 18H14"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  ),
);
SvgHome04.displayName = "SvgHome04";
export default SvgHome04;
