import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { useCart } from "../store/store";
import SuccessPayment from "./SuccessPayment";

// utils
const calculateTotalPrice = (list) => {
  let totalPrice = 0;
  for (const item of list) {
    totalPrice += item.price * item.count;
  }
  return totalPrice;
};
const calculateDiscount = (list) => {
  let totalDiscount = 0;
  for (const item of list) {
    totalDiscount += (item.price * item.count * item.discount) / 100;
  }
  return totalDiscount.toFixed(2);
};

const CartSidebar = ({ products }) => {
  const profit = calculateDiscount(products);
  const totalPrice = calculateTotalPrice(products);
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Box
        pos="relative"
        flexGrow={1}
        maxWidth="380px"
        display={{ base: "none", md: "flex" }}
      >
        <Box
          w="full"
          pos="sticky"
          top={16}
          h={200}
          border="1px solid #e0e0e2"
          rounded={10}
          px={3}
          py={2}
        >
          <Flex flexDir="column" justify="space-between" h="full">
            <Flex justify="space-between">
              <Box fontWeight={700}>Product prices</Box>
              <Box
                fontSize="1.2rem"
                fontWeight={700}
                display="flex"
                alignItems="center"
              >
                {totalPrice}$
              </Box>
            </Flex>
            <Flex justify="space-between">
              <Box fontWeight={700}>Your profit</Box>
              <Box
                fontSize="1.2rem"
                fontWeight={700}
                display="flex"
                alignItems="center"
              >
                {profit}$
              </Box>
            </Flex>
            <Flex justify="space-between">
              <Box fontWeight={700}>Final price</Box>
              <Box
                fontSize="1.2rem"
                fontWeight={700}
                display="flex"
                alignItems="center"
              >
                {totalPrice - profit}$
              </Box>
            </Flex>
            <Button
              bg="red.500"
              color="white"
              variant="unstyled"
              onClick={onOpen}
            >
              Buy
            </Button>
          </Flex>
        </Box>
      </Box>
      <SuccessPayment isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CartSidebar;
