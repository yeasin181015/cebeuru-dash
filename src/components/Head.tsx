import React from "react";
import { Helmet } from "react-helmet-async";

export type HeadProps = {
  children?: React.ReactNode;
};

const Head = ({ children }: HeadProps) => {
  return (
    <Helmet defaultTitle={"Ceburu"} titleTemplate={`%s - Ceburu`}>
      <meta name="description" content={"Ceburu Admin Dashboard"} />
      {children}
    </Helmet>
  );
};

export default Head;
