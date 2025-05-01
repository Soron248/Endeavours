import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GTMPageView = () => {
  const location = useLocation();
  console.log("Route pathname: ", location.pathname);
  console.log("Route search: ", location.search);
  console.log("Route document.title: ", document.title);

  const eventName = location.pathname.slice(1);
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName || "Home",
        page_path: location.pathname + location.search,
        page_title: (eventName || "Home") + " page", 
      });
    }
  }, [location]);

  return null;
};

export default GTMPageView;
