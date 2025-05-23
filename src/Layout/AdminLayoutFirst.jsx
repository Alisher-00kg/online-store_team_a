import { Icon } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import { Icons } from "../assets/icons/icon";

import { BrandName } from "../assets/images/images";

const AdminLayoutFirst = () => {
  return (
    <StyledWrapper>
      <StyledAside>
        <StyledImg src={BrandName} alt="Brand" />
        <StyledNav>
          <StyledNavLink to="/adminpage/womanpage">
            <StyledIcon as={Icons.Woman} />
            Woman Page
          </StyledNavLink>
          <StyledNavLink to="/adminpage/manpage">
            <StyledIcon as={Icons.Man} />
            Man Page
          </StyledNavLink>
          <StyledNavLink to="/adminpage/childrenpage">
            <StyledIcon as={Icons.Children} />
            Children Page
          </StyledNavLink>
        </StyledNav>
      </StyledAside>
      <StyledDIv>
        <Outlet />
      </StyledDIv>
    </StyledWrapper>
  );
};

export default AdminLayoutFirst;

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 90vw;
`;

const StyledDIv = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  background-color: rgb(250, 250, 251);
`;
const StyledAside = styled.aside`
  background-color: #fff;
  height: 100%;
  width: 218px;
  padding: 52px 19px 0px 19px;
  display: flex;
  flex-direction: column;
  gap: 75px;
  position: fixed;
`;

const StyledImg = styled.img`
  width: 180px;
  height: 16.18px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  display: flex;
  align-items: center;
  gap: 14px;

  svg {
    filter: brightness(0) saturate(100%) invert(39%) sepia(12%) saturate(462%)
      hue-rotate(172deg) brightness(95%) contrast(90%);
  }

  &.active {
    color: rgb(90, 142, 101);

    svg {
      filter: invert(38%) sepia(58%) saturate(584%) hue-rotate(90deg)
        brightness(90%) contrast(85%);
    }
  }
`;

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease;
    filter: brightness(0) saturate(100%) invert(39%) sepia(12%) saturate(462%)
      hue-rotate(172deg) brightness(95%) contrast(90%);
  }
`;
