import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Icons } from "../assets/icons/icon";
import { Logo } from "../assets/images/images";
import { AdminHeader } from "../components/adminComponents/AdminHeader";

export const AdminLayout = () => {
  return (
    <StyledWrapper>
      <StyledAside>
        <StyledImg src={Logo} alt="Brand" />
        <StyledNav>
          <StyledNavLink to="woman">
            <StyledIcon as={Icons.Woman} />
            <span>Woman Page</span>
          </StyledNavLink>
          <StyledNavLink to="man">
            <StyledIcon as={Icons.Man} />
            <span>Man Page</span>
          </StyledNavLink>
          <StyledNavLink to="children">
            <StyledIcon as={Icons.Children} />
            <span>Children Page</span>
          </StyledNavLink>
        </StyledNav>
      </StyledAside>
      <StyledContent>
        <AdminHeader />
        <Outlet />
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: rgb(30, 30, 30);
`;

const StyledContent = styled.div`
  margin-left: 218px;
  flex: 1;
  padding: 32px;
  background-color: rgb(250, 250, 251);
  min-height: 100vh;
`;
const StyledAside = styled.aside`
  background: rgb(255, 255, 255);
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
  height: 40px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  span {
    color: rgb(126, 132, 148);
    font-family: Nunito;
    font-weight: 600;
    line-height: 22px;
  }
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

// const Container = styled.div`
//   display: flex;
//   min-height: 100vh;
// `;

// const Aside = styled.aside`
//   width: 240px;
//   background: rgb(255, 255, 255);
//   color: white;
//   padding: 20px;
// `;

// const Content = styled.main`
//   flex: 1;
//   padding: 20px;
//   background: #f4f4f4;
// `;

// const MenuLink = styled(NavLink)`
//   display: block;
//   margin-bottom: 10px;
//   color: white;
//   text-decoration: none;

//   &.active {
//     font-weight: bold;
//     text-decoration: underline;
//   }
// `;
