import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  htmlElement?: HeadingTag;
  textClassName?: string;
  color?: string;
  children: React.ReactNode;
};

const Heading = ({
  htmlElement: Tag = "h1",
  textClassName,
  color,
  children,
}: HeadingProps) => (
  <Tag className={textClassName} style={{ color }}>
    {children}
  </Tag>
);

export default Heading;
