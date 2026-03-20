import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
  color?: string,
  title?: string,
  titleId?: string,
};
const SvgCompass = React.forwardRef(
  (
    { size = 24, color = "currentColor", title, titleId, ...props }: IconProps,
    ref: React.Ref<SVGSVGElement>
  ) => {
    const svgProps = {
      width: size,
      height: size,
      style: {
        color,
      },
      ref,
      ...props,
    };
    const inner = (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ref={ref}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M14.8612 8.04584L8.59084 10.1359C7.80305 10.3985 7.80305 11.5128 8.59084 11.7754L10.9063 12.5472C11.1643 12.6333 11.3667 12.8357 11.4528 13.0937L12.2246 15.4092C12.4872 16.1969 13.6015 16.1969 13.8641 15.4092L15.9542 9.13883C16.1793 8.46332 15.5367 7.82067 14.8612 8.04584Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
    return React.cloneElement(inner, svgProps);
  }
);
SvgCompass.displayName = "SvgCompass";
export default SvgCompass;
