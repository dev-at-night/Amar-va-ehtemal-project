import { Wrap, WrapItem } from "@chakra-ui/react";
import { products } from "../sampleData";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <Wrap justify="center">
      {products.map((product) => (
        <WrapItem
          key={product.id}
          _hover={{
            zIndex: 1,
            filter: "drop-shadow(0 1px 5px rgba(0,0,0,.2))",
          }}
          bg="#fff"
          border={{ lg: "1px solid #f0f0f1" }}
          margin="0 !important"
          minH="420px"
          minW="300px"
        >
          <ProductCard product={product} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductList;
