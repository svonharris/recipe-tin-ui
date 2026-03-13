type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  altText: string;
  style?: React.CSSProperties;
};

const Image = ({
  src,
  width = "100%",
  height = "auto",
  altText,
  style,
}: ImageProps) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={altText}
      style={{ maxWidth: "100%", ...style }}
    />
  );
};

export default Image;
