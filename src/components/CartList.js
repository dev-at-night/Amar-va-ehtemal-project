import { Box } from "@chakra-ui/react";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <Box mr={{ md: 4 }} border="1px solid #e0e0e2" rounded={10} flexGrow={3}>
      {items.map((item, idx) => (
        <Box
          key={item.id}
          px={3}
          py={2}
          borderBottom={items.length - 1 === idx ? "none" : "1px solid #e0e0e2"}
        >
          <Box display="grid" gridTemplateColumns="116px 1fr" gridColumnGap={6}>
            <CartItem item={item} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartList;
