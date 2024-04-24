import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import VrVideo from "./components/VrVideo";
import LoginPage from "./components/auth/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/scenes/:sceneId",
      element: <VrVideo />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
