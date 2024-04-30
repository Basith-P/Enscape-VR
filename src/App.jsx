import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import VrVideo from "./components/VrVideo";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import RateVideoPage from "./components/RateVideoPage";
import AdminHome from "./components/admin/AdminHome";

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
      path: "/dashboard",
      element: <AdminHome />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
