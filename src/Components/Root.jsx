import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div className="lg:w-[80%] w-[95%] mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
