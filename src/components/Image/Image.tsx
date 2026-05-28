import React from "react";

export type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  altText: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  objectFit?: React.CSSProperties["objectFit"];
};

const Image = ({
  src,
  width = "auto",
  height = "auto",
  altText,
  borderRadius = "none",
  objectFit = "cover",
}: ImageProps) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={altText}
      style={{ borderRadius, objectFit }}
    />
  );
};

export { Image };
export default Image;
