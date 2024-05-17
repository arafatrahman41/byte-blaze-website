import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
        <Nav />
      </div>
      {/* packet */}
      <div className="min-h-[calc(100vh-116px)]">
      <Outlet/>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default MainLayouts;
