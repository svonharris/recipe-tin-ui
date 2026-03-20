import * as React from "react";
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
  color?: string,
  title?: string,
  titleId?: string,
};
const SvgCheckboxIconIntermediate = React.forwardRef(
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
        <rect x={4} y={4} width={16} height={16} rx={4} fill="currentColor" />
        <rect x={7} y={11} width={10} height={2} rx={1} fill="currentColor" />
      </svg>
    );
    return React.cloneElement(inner, svgProps);
  }
);
SvgCheckboxIconIntermediate.displayName = "SvgCheckboxIconIntermediate";
export default SvgCheckboxIconIntermediate;
