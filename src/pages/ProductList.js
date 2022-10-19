import styled from "styled-components";
import Announcemnet from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const colorList = [
    { id: 1, name: "White" },
    { id: 2, name: "White" },
    { id: 3, name: "Black" },
    { id: 4, name: "Red" },
    { id: 5, name: "Blue" },
    { id: 6, name: "Yellow" },
    { id: 7, name: "Green" },
  ];
  const sizeList = [
    { id: 1, title: "XS" },
    { id: 2, title: "S" },
    { id: 3, title: "M" },
    { id: 4, title: "L" },
    { id: 5, title: "XL" },
    { id: 6, title: "XXL" },
  ];
  return (
    <Container>
      <Navbar></Navbar>
      <Announcemnet></Announcemnet>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            {colorList.map((el) => (
              <Option>{el?.name}</Option>
            ))}
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            {sizeList.map((el) => (
              <Option>{el?.title}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Produts:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
