import React from "react";

export type StackProps = {
  children: React.ReactNode;
  gap?: number;
  align?: "top" | "center" | "bottom";
  justify?: "between" | "around";
};

const ALIGN: Record<"top" | "center" | "bottom", string> = {
  top: "stretch",
  center: "center",
  bottom: "flex-end",
};

const JUSTIFY: Record<"between" | "around", string> = {
  between: "space-between",
  around: "space-around",
};

const Stack = ({ children, gap = 0, align = "top", justify }: StackProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap,
      alignItems: ALIGN[align],
      ...(justify && { justifyContent: JUSTIFY[justify] }),
    }}
  >
    {children}
  </div>
);

export { Stack };
export default Stack;
