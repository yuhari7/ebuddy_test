import React, { ReactNode } from "react";
import { Container } from "@mui/material";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
