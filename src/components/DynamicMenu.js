import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "../assets/search-svgrepo-com.svg";
import arrow from "../assets/up-arrow-svgrepo-com.svg";
import Logo from "../assets/Logo.svg";
import {
  NavWrapper,
  LogoContainer,
  MenuItems,
  MenuList,
  MenuWrapper,
  MoreContainer,
  MoreItems,
  MoreItemsContainer,
  DynamicMenuContainer,
  ArrowContainer,
  SearchBox,
  SearchContainer,
  SearchBtn,
  MobileMenuItems,
  MobileNav,
  IconContainer,MobileMenuItemsContainer
} from "./DynamicMenu.styles";

const OverflowCheckComponent = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(items);
  const [overflowedItems, setOverflowedItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const listContainerRef = useRef();

  const checkOverflowX = () => {
    if (listContainerRef.current) {
      const listContainer = listContainerRef.current;
      const listItems = listContainer.getElementsByTagName("li");
      const visibleItemsArray = [];
      const overflowedItemsArray = [];

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        listItem.style.display = "block";
        const listItemRect = listItem.getBoundingClientRect();
        // Check if the item is completely or partially visible in the horizontal direction
        if (
          listItemRect.left >= 0 &&
          listItemRect.right <=
            (window.innerWidth - 300 ||
              document.documentElement.clientWidth - 300)
        ) {
          visibleItemsArray.push(items[i]);
          listItem.style.display = "block";
        } else {
          overflowedItemsArray.push(items[i]);
          listItem.style.display = "none";
        }
      }

      setVisibleItems(visibleItemsArray);
      setOverflowedItems(overflowedItemsArray);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkOverflowX);
    checkOverflowX(); // Check overflow-x initially

    return () => {
      window.removeEventListener("resize", checkOverflowX);
    };
  }, []);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const handleMobileMenuClick = ()=>{
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <>
      <NavWrapper ref={listContainerRef}>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <MenuWrapper>
          <DynamicMenuContainer>
            <MenuList>
              {items.map((item, index) => (
                <MenuItems key={index}>{item}</MenuItems>
              ))}
            </MenuList>
          </DynamicMenuContainer>
          {overflowedItems.length > 0 ? (
            <MoreContainer onClick={handleShow}>
              More
              <ArrowContainer src={arrow} alt="arrow" show={showMenu} />
            </MoreContainer>
          ) : null}
        </MenuWrapper>
        <SearchContainer>
          <SearchBtn>
            <img src={SearchIcon} alt="search" />
          </SearchBtn>
          <SearchBox type="text" placeholder="Search something"></SearchBox>
        </SearchContainer>
      </NavWrapper>
      {overflowedItems.length > 0 && showMenu ? (
        <MoreItemsContainer>
          {overflowedItems.map((item, i) => {
            return <MoreItems key={i}>{item}</MoreItems>;
          })}
        </MoreItemsContainer>
      ) : null}
      <MobileNav>
        <LogoContainer>
          <img src={Logo} alt="logo" width="150" />
        </LogoContainer>
        <IconContainer onClick={handleMobileMenuClick}>
          {showMobileMenu ? <>&#10005;</> : <> &#8801;</>}
        </IconContainer>
      </MobileNav>
      {showMobileMenu ? (
        <MobileMenuItemsContainer>
          {items.map((item, i) => {
            return <MobileMenuItems key={i}>{item}</MobileMenuItems>;
          })}
        </MobileMenuItemsContainer>
      ) : (
        null
      )}
    </>
  );
};

export default OverflowCheckComponent;
