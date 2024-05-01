import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import VrVideo from "./components/VrVideo";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import RateVideoPage from "./components/RateVideoPage";
import UploadVideoPage from "./components/admin/UploadVideo";
import RequestFeaturePage from "./components/RequestFeaturePage";
import Dashboard from "./components/admin/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <SignupPage />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/scenes/:sceneId",
      element: <VrVideo />,
    },
    {
      path: "/rate",
      element: <RateVideoPage />,
    },
    {
      path: "/request-feature",
      element: <RequestFeaturePage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/upload-video",
      element: <UploadVideoPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
