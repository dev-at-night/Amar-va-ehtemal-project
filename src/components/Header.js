import { Flex, Box, Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../store/store";

const Header = () => {
  const { state } = useCart();
  return (
    <Flex
      px={6}
      py={2}
      alignItems="center"
      justify="space-between"
      boxShadow="0 1px 0 rgb(0 0 0 / 14%), 0 2px 0 rgb(0 0 0 / 5%)"
      pos="sticky"
      top="0"
      zIndex={10}
      bg="white"
    >
      <Link to="/">
        <Box as="h3" fontWeight={700} fontStyle="italic">
          OnlineSHOP
        </Box>
      </Link>
      <Link to="cart">
        <Box pos="relative">
          <Icon as={AiOutlineShoppingCart} w={8} h={8} />
          {state.items.length > 0 && (
            <Box
              pos="absolute"
              px={1}
              right={0}
              bottom={0}
              bg="#ef4056"
              color="white"
              rounded={3}
            >
              {state.items.length}
            </Box>
          )}
        </Box>
      </Link>
    </Flex>
  );
};

export default Header;
