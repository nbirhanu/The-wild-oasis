import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
`;
const StyledApplayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function Applayout() {
  return (
    <StyledApplayout>
      <Header />
      <Sidebar />
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
    </StyledApplayout>
  );
}

export default Applayout;
