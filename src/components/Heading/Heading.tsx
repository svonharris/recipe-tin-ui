import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  htmlElement?: HeadingTag;
  textClassName?: string;
  color?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
};

const Heading = ({
  htmlElement: Tag = "h1",
  textClassName,
  color,
  align = "left",
  children,
}: HeadingProps) => (
  <Tag className={textClassName} style={{ color, textAlign: align, flex: 1 }}>
    {children}
  </Tag>
);

export { Heading };
export default Heading;
