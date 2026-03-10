import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
  color?: string,
  title?: string,
  titleId?: string,
};
const SvgGps = React.forwardRef(
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
      <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M10.7624 12.9209L9.24718 12.4159C8.81101 12.2705 8.78575 11.663 9.20833 11.4819L13.8506 9.49238C14.2655 9.31459 14.685 9.73406 14.5072 10.1489L12.5176 14.7912C12.3365 15.2138 11.7291 15.1885 11.5837 14.7524L11.0786 13.2372C11.0289 13.0879 10.9117 12.9707 10.7624 12.9209Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4V2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 22V20"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M20 12L22 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M2 12L4 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
);
SvgGps.displayName = "SvgGps";
export default SvgGps;
