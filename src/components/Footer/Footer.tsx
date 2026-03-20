import React from "react";

type FooterProps = {
  children?: React.ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <footer style={{ borderTop: "1px solid var(--color-gray-100)" }}>
      {children}
    </footer>
  );
};

export default Footer;
