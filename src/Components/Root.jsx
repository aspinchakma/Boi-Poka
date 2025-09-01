import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div className="lg:w-[80%] w-[95%] mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
