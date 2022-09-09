import { Image, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import DemandControl from "./DemandControl";

const CartItem = ({ item }) => {
  const [demant, setDemand] = useState(item.count);
  return (
    <>
      <Image
        src={item.picture}
        w="150px"
        h="150px"
        objectFit="contain"
        opacity={1}
        transition="opacity 0.2s"
        display="inline-block"
      />
      <Box>
        <Flex flexDir="column">
          <Box as="h4" fontSize="1.1rem" fontWeight={700} mb={2}>
            {item.name}
          </Box>
        </Flex>
      </Box>
      <Box display="flex" justifyContent="center">
        <DemandControl product={item} demand={demant} setDemand={setDemand} />
      </Box>
      <Box
        fontSize="1.6rem"
        fontWeight={700}
        display="flex"
        alignItems="center"
      >
        {item.price}$
      </Box>
    </>
  );
};

export default CartItem;
