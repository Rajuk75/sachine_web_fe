import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayoutWrapper from "../components/LayoutWrapper";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <LayoutWrapper>
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </LayoutWrapper>
      </div>
    </>
  );
};

export default MainLayout;
