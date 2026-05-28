import React from "react";

export type ImageContainerProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  minWidth?: string;
};

const ImageContainer = ({
  children,
  width = "100%",
  height = "250px",
  minWidth = "300px",
}: ImageContainerProps) => {
  return (
    <div
      style={{
        width,
        height,
        minWidth,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export { ImageContainer };
export default ImageContainer;
