import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 2.4rem;
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
