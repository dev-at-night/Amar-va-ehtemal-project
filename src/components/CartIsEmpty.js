import { Flex, Icon, Box } from "@chakra-ui/react";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartIsEmpty = () => {
  return (
    <Box w="full">
      <Flex w="full" justify="center" mb={3}>
        <Icon as={BsBasket} w={16} h={16} />
      </Flex>
      <Box
        w="full"
        as="p"
        fontSize="1rem"
        fontWeight={400}
        color="#62666d"
        mb={2}
        textAlign="center"
      >
        You can go to main page for see the products
      </Box>
      <Flex justify="center" w="full">
        <Link to="/" color="blue">
          <Box as="span" fontSize="1rem" fontWeight={700}>
            Products page
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default CartIsEmpty;
