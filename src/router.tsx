import LadingPage from "./pages/Landing";
import FunnelPage from "./pages/Funnel";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LadingPage />,
  },
  {
    path: "/useFunnel/*",
    element: <FunnelPage />,
  },
]);
