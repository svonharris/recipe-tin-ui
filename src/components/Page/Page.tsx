import type { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <>{children}</>;
};

export default Page;
