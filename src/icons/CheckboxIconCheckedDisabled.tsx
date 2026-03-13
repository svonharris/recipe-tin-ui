import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  title?: string;
  titleId?: string;
};
const SvgCheckboxIconCheckedDisabled = React.forwardRef(
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
      <rect x={4} y={4} width={16} height={16} rx={4} fill="currentColor" />
      <path
        d="M15.8506 8.20701C15.9127 8.14147 15.9867 8.0894 16.0684 8.05385C16.1502 8.01831 16.2379 8 16.3265 8C16.4152 8 16.5029 8.01831 16.5847 8.05385C16.6664 8.0894 16.7404 8.14147 16.8025 8.20701C17.0625 8.47903 17.0661 8.91859 16.8116 9.19532L11.436 15.7746C11.375 15.844 11.3009 15.8998 11.2183 15.9385C11.1358 15.9772 11.0464 15.9981 10.9558 15.9999C10.8652 16.0016 10.7752 15.9842 10.6912 15.9487C10.6073 15.9132 10.5313 15.8604 10.4678 15.7934L7.19681 12.3617C7.07066 12.2285 7 12.0493 7 11.8628C7 11.6762 7.07066 11.4971 7.19681 11.3639C7.25886 11.2984 7.33291 11.2463 7.41463 11.2108C7.49635 11.1752 7.58409 11.1569 7.67273 11.1569C7.76137 11.1569 7.84912 11.1752 7.93084 11.2108C8.01256 11.2463 8.08661 11.2984 8.14865 11.3639L10.9233 14.2752L15.8324 8.22772C15.8381 8.22044 15.8442 8.21353 15.8506 8.20701Z"
        fill="currentColor"
      />
    </svg>
  ),
);
SvgCheckboxIconCheckedDisabled.displayName = "SvgCheckboxIconCheckedDisabled";
export default SvgCheckboxIconCheckedDisabled;
