import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayoutWrapper from "../components/LayoutWrapper";
import PATHS from "../routes/paths";

const MainLayout = () => {
  const location = useLocation();
  const hideFooterPaths = [PATHS.PROGRAMMATIC_ADS];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <LayoutWrapper>
          <main className="flex-grow">
            <Outlet />
          </main>
          {!hideFooterPaths.includes(location.pathname) && <Footer />}
        </LayoutWrapper>
      </div>
    </>
  );
};

export default MainLayout;
