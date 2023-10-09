import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;
const StyledApplayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
function Applayout() {
  return (
    <StyledApplayout>
      <Header />
      <Sidebar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledApplayout>
  );
}

export default Applayout;
