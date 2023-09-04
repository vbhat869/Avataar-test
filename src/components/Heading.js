import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const HeadingMain = styled.h1`
  text-transform: capitalize;
  padding: 0;
  margin: 5px;
`;

const SubHeading = styled.h3`
  text-transform: capitalize;
  font-weight: 400;
  padding: 0;
  margin: 5px;
`;
const Heading = () => {
  return (
    <Wrapper>
      <HeadingMain>Featured Products</HeadingMain>
      <SubHeading>Explore and discover a variety of products</SubHeading>
    </Wrapper>
  );
};

export default Heading;
