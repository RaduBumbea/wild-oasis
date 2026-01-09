import styled from "styled-components";
import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 4rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

function SideBar() {
  return <StyledSideBar>
    <Logo />
    <MainNav />
  </StyledSideBar>;
}

export default SideBar;