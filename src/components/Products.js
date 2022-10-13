import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((el) => (
        <Product item={el} key={el?.id} />
      ))}
    </Container>
  );
};

export default Products;
