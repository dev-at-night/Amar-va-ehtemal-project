import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Box minH="100vh">
      <Header />
      <Container maxW="container.xl" pt={4}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
