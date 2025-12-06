import { Link, useLocation } from "react-router-dom";
import PATHS from "../routes/paths";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const getPathName = (path) => {
    return path
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="py-3 px-4 sm:px-6 lg:px-8 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to={PATHS.HOME}
              className="hover:text-blue-600 transition-colors text-gray-600"
            >
              🏠 Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={name} className="flex items-center space-x-2">
                <span className="text-gray-400">
                  →
                </span>
                {isLast ? (
                  <span className="font-semibold text-gray-900">
                    {getPathName(name)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-blue-600 transition-colors text-gray-600"
                  >
                    {getPathName(name)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
