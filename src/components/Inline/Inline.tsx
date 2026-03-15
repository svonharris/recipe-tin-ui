import React from "react";

type InlineProps = {
  children: React.ReactNode;
  gap?: number;
  align?: "top" | "center" | "bottom";
};

const ALIGN: Record<"top" | "center" | "bottom", string> = {
  center: "center",
  top: "flex-start",
  bottom: "baseline",
};

const Inline = ({ children, gap = 16, align = "center" }: InlineProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap,
      alignItems: ALIGN[align],
    }}
  >
    {children}
  </div>
);

export default Inline;
