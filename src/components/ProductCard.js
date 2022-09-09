import { Flex, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import DemandControl from "./DemandControl";

const ProductCard = ({ product }) => {
  const [demand, setDemand] = useState(0);

  return (
    <Box w="full">
      <Flex flexDir="column" h="full" px={4} py={3}>
        <Box pos="relative">
          <Image
            src={product.picture}
            w="full"
            overflow="hidden"
            h={300}
            mb={1}
            objectFit="contain"
            opacity={1}
            transition="opacity 0.2s"
            display="inline-block"
          />
        </Box>
        <Box
          as="h4"
          fontSize="1.2rem"
          fontWeight={500}
          css={{
            display: "-webkit-box",
            WekitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </Box>
        <Box
          h={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box fontSize="1.6rem" fontWeight={700}>
            {product.price} $
          </Box>
          <DemandControl
            product={product}
            demand={demand}
            setDemand={setDemand}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
