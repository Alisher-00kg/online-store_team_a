import { Link, useLocation } from "react-router-dom";
import { Icons } from "../../assets/icons/icon";
import styled from "styled-components";

const capitalizeWithSpaces = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (char) => char.toUpperCase())
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const BreadCrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <STyledNav>
      <STyledLink1 to="/">Product Catalog</STyledLink1>
      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        const name = decodeURIComponent(segment);

        return (
          <StyledSpan key={to}>
            <StyledArrow />

            <STyledLink to={to}>{capitalizeWithSpaces(name)}</STyledLink>
          </StyledSpan>
        );
      })}
    </STyledNav>
  );
};

export default BreadCrumbs;

const StyledArrow = styled(Icons.GreenRightArrow)`
  width: 14px;
  height: 14px;
`;

const STyledNav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  gap: 3px;
`;

const STyledLink = styled.span`
  color: rgb(48, 114, 63);
  text-decoration: none;
  cursor: pointer;
`;
const STyledLink1 = styled(Link)`
  text-decoration: none;
  color: rgb(18, 19, 20);
`;

const StyledSpan = styled.span`
  display: flex;

  align-items: center;
`;
