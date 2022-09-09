import { Flex } from "@chakra-ui/react";
import CartIsEmpty from "../components/CartIsEmpty";
import CartList from "../components/CartList";
import CartSidebar from "../components/CartSidebar";
import { useCart } from "../store/store";

const Cart = () => {
  const { state } = useCart();
  return (
    <Flex>
      {state.items.length > 0 ? (
        <>
          <CartList items={state.items} />
          <CartSidebar products={state.items} />
        </>
      ) : (
        <CartIsEmpty />
      )}
    </Flex>
  );
};

export default Cart;
