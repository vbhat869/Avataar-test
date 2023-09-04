import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #2f302c;
  max-height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding: 0 25px;
  flex-wrap: nowrap;
`;

export const MenuWrapper = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
`;

export const DynamicMenuContainer = styled.div`
  overflow-x: hidden;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const MenuItems = styled.li`
  padding: 10px 15px;
  text-transform: uppercase;
  font-size: 14px;

  &:hover {
    color: #83cef9;
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0px 25px;
  flex-wrap: nowrap;
  padding-bottom: 0px 10px 10px;
  border-bottom: 1px solid #fff;
  min-width: 200px;
  position: absolute;
  right: 0;
`;

export const SearchBtn = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  padding-right: 10px;
`;

export const SearchBox = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`;
export const ArrowContainer = styled.img`
  transform: ${(props) => (props.show ? "rotate(0deg)" : "rotate(180deg)")};
  margin-left: 5px;
`;

export const MoreItemsContainer = styled.div`
  position: absolute;
  top: 82px;
  right: 230px;
  background-color: #2f302c;
  border-radius: 5px;
  width: 100px;
  z-index: 101;
`;

export const MoreItems = styled.div`
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #fff;

  &:hover {
    background: #eee;
    color: #000;
  }
`;

// Mobile Nav styles

export const MobileNav = styled.div`
  background-color: #2f302c;
  color: #fff;
  max-height: 70px;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const IconContainer = styled.div`
  padding: 0px 20px;
  font-size: 40px;
  cursor: pointer;
`;

export const MobileMenuItemsContainer = styled.div`
  background-color: #2f302c;
  position: absolute;
  color: #eee;
  height: 88vh;
  width: 100%;
  right: 0px;
  bottom: 0px;
  top: 70px;
  z-index: 111;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileMenuItems = styled.div`
  font-size: 20px;
  padding: 12px;
  width: 100%;
  text-align: end;

  &:hover {
    color: #83cef9;
    cursor: pointer;
  }
`;
