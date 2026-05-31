import React from "react";

type ContainerElement =
  | "div"
  | "main"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "nav";

export type ContainerProps = {
  children?: React.ReactNode;
  htmlElement?: ContainerElement;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
};

const Container = ({
  children,
  htmlElement: Tag = "div",
  paddingTop,
  paddingBottom,
  paddingLeft = 16,
  paddingRight = 16,
}: ContainerProps) => (
  <Tag style={{ paddingTop, paddingBottom, paddingLeft, paddingRight }}>
    {children}
  </Tag>
);

export { Container };
export default Container;
