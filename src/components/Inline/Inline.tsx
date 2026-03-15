import React from "react";

type InlineProps = {
  children: React.ReactNode;
  gap?: number;
  align?: "top" | "center" | "bottom";
  justify?: "between" | "around";
};

const ALIGN: Record<"top" | "center" | "bottom", string> = {
  top: "flex-start",
  center: "center",
  bottom: "baseline",
};

const JUSTIFY: Record<"between" | "around", string> = {
  between: "space-between",
  around: "space-around",
};

const Inline = ({
  children,
  gap = 16,
  align = "center",
  justify,
}: InlineProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap,
      alignItems: ALIGN[align],
      ...(justify && { justifyContent: JUSTIFY[justify] }),
    }}
  >
    {children}
  </div>
);

export default Inline;
