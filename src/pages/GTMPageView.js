import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GTMPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page_path: location.pathname + location.search,
        page_title: document.title, // this line adds page title
      });
    }
  }, [location]);

  return null;
};

export default GTMPageView;
