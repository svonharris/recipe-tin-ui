module.exports = {
  typescript: true,
  titleProp: true,
  ref: true,
  svgo: true,
  svgoConfig: {
    plugins: [
      { name: 'removeViewBox', active: false },
      { name: 'removeDimensions', active: true },
      {
        name: 'convertColors',
        params: { currentColor: true }
      }
    ]
  },
  template: ({ componentName, jsx }, { tpl }) => tpl`
    import * as React from "react";
    import type { SVGProps } from "react";

    type IconProps = SVGProps<SVGSVGElement> & {
      size?: number;
      color?: string;
      title?: string;
      titleId?: string;
    };

    const ${componentName} = React.forwardRef(
      ({ size = 24, color = "currentColor", title, titleId, ...props }: IconProps, ref: React.Ref<SVGSVGElement>) => (
        ${jsx}
      )
    );

    ${componentName}.displayName = "${componentName}";

    export default ${componentName};
  `,
};