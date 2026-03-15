import React from "react";

type StackProps = {
  children: React.ReactNode;
  gap?: number;
};

const Stack = ({ children, gap = 16 }: StackProps) => (
  <div style={{ display: "flex", flexDirection: "column", gap }}>
    {children}
  </div>
);

export default Stack;
