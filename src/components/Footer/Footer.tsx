import React from "react";

export type FooterProps = {
  children?: React.ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-gray-100)",
        backgroundColor: "var(--color-white)",
      }}
    >
      {children}
    </footer>
  );
};

export { Footer };
export default Footer;
