import React from "react";

export type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  altText: string;
  borderRadius?: React.CSSProperties["borderRadius"];
};

const Image = ({
  src,
  width = "auto",
  height = "auto",
  altText,
  borderRadius = "none",
}: ImageProps) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={altText}
      style={{ borderRadius }}
    />
  );
};

export { Image };
export default Image;
