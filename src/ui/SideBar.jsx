import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 4rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
`;

function SideBar() {
  return <StyledSideBar>SideBar</StyledSideBar>;
}

export default SideBar;