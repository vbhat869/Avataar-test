import { useState } from "react";
import styled from "styled-components";
import arrowRight from "../assets/Arrow Right.svg";
import dot from "../assets/dotGrey.svg";
import dotActive from "../assets/dotActive.svg";

const StyledContainer = styled.div`
  height: 400px;
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowContainer = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
const Arrow = styled.img`
  transform: ${(props) => (props.isleft ? "rotate(180deg)" : "rotate(0deg)")};
`;
const DotContainer = styled.img`
  margin: 0 5px;
  cursor: pointer;
`;

const Carousel = ({cards}) => {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const handleNext = () => {
    if (index === cards.length - 1) {
      setIndex(0 % cards.length);
    } else {
      setIndex((index + 1) % cards.length);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex((cards.length - 1) % cards.length);
    } else {
      setIndex((index - 1) % cards.length);
    }
  };

  const handleDotClick = (i) => {
    setIndex(i);
  };

  const showCards = (item, i) => {
    const indexLeft = mod(index - 1, cards.length);
    const indexRight = mod(index + 1, cards.length);
    const indexLeftMost = mod(index - 2, cards.length);
    const indexRightMost = mod(index + 2, cards.length);
    let className = "card";

    if (i === index) {
      className = "card card--active";
    } else if (i === indexRight) {
      className = "card card--right";
    } else if (i === indexLeft) {
      className = "card card--left";
    } else if (i === indexRightMost) {
      className = "card card--right-most";
    } else if (i === indexLeftMost) {
      className = "card card--left-most";
    } else className = "card";

    return (
      <img
        key={item.id}
        className={className}
        src={item.image}
        alt="Comic"
      ></img>
    );
  };

  return (
    <>
      <StyledContainer>
        {cards.map((item, i) => {
          return showCards(item, i);
        })}
      </StyledContainer>
      <NavContainer>
        <ArrowContainer onClick={handlePrev}>
          <Arrow src={arrowRight} alt="arr" isleft="true" />
        </ArrowContainer>
        {cards.map((item, i) => {
          if (i === index) {
            return <DotContainer key={item.id} src={dotActive} alt="dot" />;
          }
          return (
            <DotContainer
              onClick={() => {
                handleDotClick(i);
              }}
              key={item.id}
              src={dot}
              alt="dot"
            />
          );
        })}
        <ArrowContainer onClick={handleNext}>
          <Arrow src={arrowRight} alt="arr" />
        </ArrowContainer>
      </NavContainer>
    </>
  );
};

export default Carousel;
