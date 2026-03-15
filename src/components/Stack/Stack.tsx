import React from "react";

type StackProps = {
  children: React.ReactNode;
  gap?: number;
  align?: "top" | "center" | "bottom";
};

const ALIGN: Record<"top" | "center" | "bottom", string> = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
};

const Stack = ({ children, gap = 16, align = "top" }: StackProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap,
      alignItems: ALIGN[align],
    }}
  >
    {children}
  </div>
);

export default Stack;
