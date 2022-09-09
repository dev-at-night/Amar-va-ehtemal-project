import { Box, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { addToCartAction, removeFromCartAction } from "../store/actions";
import { useCart } from "../store/store";

const DemandControl = ({ demand, setDemand, product }) => {
  const { dispatch } = useCart();
  const onIncrement = () => {
    setDemand((prevDemand) => prevDemand + 1);
    dispatch(addToCartAction(product));
  };
  const onDecrement = () => {
    setDemand((prevDemand) => prevDemand - 1);
    dispatch(removeFromCartAction(product));
  };
  return (
    <>
      {demand > 0 ? (
        <Flex
          px={2}
          h={12}
          rounded={10}
          w={100}
          boxShadow="0 1px 5px rgb(0 0 0 / 20%)"
          justifyContent="space-between"
          align="center"
          userSelect="none"
        >
          <Icon
            as={demand === 1 ? BsTrash : AiOutlineMinus}
            w={"24px"}
            h={"24px"}
            color="red.400"
            onClick={onDecrement}
            cursor="pointer"
          />

          <Box fontSize="1.2rem" fontWeight={700}>
            {demand}
          </Box>
          <Icon
            as={AiOutlinePlus}
            w={"24px"}
            h={"24px"}
            color="red.400"
            fontWeight={700}
            onClick={onIncrement}
            cursor="pointer"
            pointerEvents={demand === product.numberInStock ? "none" : "auto"}
            opacity={demand === product.numberInStock ? "0.5" : "1"}
          />
        </Flex>
      ) : (
        <Icon
          as={AiOutlinePlus}
          w="26px"
          h="26px"
          border="1px solid red"
          rounded="full"
          color="red.400"
          cursor="pointer"
          onClick={onIncrement}
        />
      )}
    </>
  );
};

export default DemandControl;
