import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: rgb(73, 73, 73);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Banner = () => {
    
  return <Container> Free Delivery For Local Orders Over LKR 5500/=</Container>;
};

export default Banner;