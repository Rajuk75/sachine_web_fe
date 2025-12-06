import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageLoader from "../components/PageLoader";
import PATHS from "./paths";
const Home = lazy(() => import("../pages/Home"));
const Solutions = lazy(() => import("../pages/Solutions"));
const Company = lazy(() => import("../pages/Company"));
const Investors = lazy(() => import("../pages/Investors"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const Disclaimer = lazy(() => import("../pages/Disclaimer"));
const ProgrammaticAdvertising = lazy(() => import("../pages/ProgrammaticAdvertising"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path={PATHS.SOLUTIONS} element={<Solutions />} />
          <Route path={PATHS.COMPANY} element={<Company />} />
          <Route path={PATHS.INVESTORS} element={<Investors />} />
          <Route path={PATHS.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={PATHS.TERMS_OF_SERVICE} element={<TermsOfService />} />
          <Route path={PATHS.DISCLAIMER} element={<Disclaimer />} />
          <Route path={PATHS.PROGRAMMATIC_ADS} element={<ProgrammaticAdvertising />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;