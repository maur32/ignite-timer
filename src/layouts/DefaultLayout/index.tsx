import {Outlet} from "react-router-dom";
import Header from "../../components/Header";
import {LayoutContainer} from "./style";

export default function DefautLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
