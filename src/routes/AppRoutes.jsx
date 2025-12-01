import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageLoader from "../components/PageLoader";
import PATHS from "./paths";
const Home = lazy(() => import("../pages/Home"));
const Studio = lazy(() => import("../pages/Studio"));
const Technology = lazy(() => import("../pages/Technology"));
const Solutions = lazy(() => import("../pages/Solutions"));
const Company = lazy(() => import("../pages/Company"));
const Resources = lazy(() => import("../pages/Resources"));
const Investors = lazy(() => import("../pages/Investors"));
const Consulting = lazy(() => import("../pages/services/Consulting"));
const Development = lazy(() => import("../pages/services/Development"));
const Design = lazy(() => import("../pages/services/Design"));
const Support = lazy(() => import("../pages/services/Support"));
const Training = lazy(() => import("../pages/services/Training"));
const Integration = lazy(() => import("../pages/services/Integration"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.STUDIO} element={<Studio />} />
          <Route path={PATHS.TECHNOLOGY} element={<Technology />} />
          <Route path={PATHS.SOLUTIONS} element={<Solutions />} />
          <Route path={PATHS.COMPANY} element={<Company />} />
          <Route path={PATHS.RESOURCES} element={<Resources />} />
          <Route path={PATHS.INVESTORS} element={<Investors />} />
          <Route path={PATHS.CONSULTING} element={<Consulting />} />
          <Route path={PATHS.DEVELOPMENT} element={<Development />} />
          <Route path={PATHS.DESIGN} element={<Design />} />
          <Route path={PATHS.SUPPORT} element={<Support />} />
          <Route path={PATHS.TRAINING} element={<Training />} />
          <Route path={PATHS.INTEGRATION} element={<Integration />} />
          <Route path={PATHS.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={PATHS.TERMS_OF_SERVICE} element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;