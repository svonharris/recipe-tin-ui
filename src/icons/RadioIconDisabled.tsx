import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
  color?: string,
  title?: string,
  titleId?: string,
};
const SvgRadioIconDisabled = React.forwardRef(
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
          d="M12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5Z"
          stroke="currentColor"
        />
        <rect x={7} y={7} width={10} height={10} rx={5} fill="currentColor" />
      </svg>
    );
    return React.cloneElement(inner, svgProps);
  }
);
SvgRadioIconDisabled.displayName = "SvgRadioIconDisabled";
export default SvgRadioIconDisabled;
