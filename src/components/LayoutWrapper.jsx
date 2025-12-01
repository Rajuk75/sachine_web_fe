import CustomCursor from "./CustomCursor";
import ScrollToTop from "./ScrollToTop";
import PageTransition from "./PageTransition";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <CustomCursor enabled={true} />
      <PageTransition>
        {children}
      </PageTransition>
      <ScrollToTop />
    </>
  );
};

export default LayoutWrapper;
