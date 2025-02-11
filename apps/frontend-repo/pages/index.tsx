import React from "react";
import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";
import MainLayout from "@/components/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Container>
        <Typography variant="h4">Home Page</Typography>
        <Link href="/login">
          <Button variant="contained">Go to Login</Button>
        </Link>
      </Container>
    </MainLayout>
  );
};

export default Home;
