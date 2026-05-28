import React from "react";

type ContainerElement = "div" | "main" | "section" | "article" | "aside" | "header" | "footer" | "nav";

export type ContainerProps = {
  children?: React.ReactNode;
  htmlElement?: ContainerElement;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
};

const Container = ({
  children,
  htmlElement: Tag = "div",
  paddingTop,
  paddingBottom,
  paddingLeft = "16px",
  paddingRight = "16px",
}: ContainerProps) => (
  <Tag style={{ paddingTop, paddingBottom, paddingLeft, paddingRight }}>
    {children}
  </Tag>
);

export { Container };
export default Container;
