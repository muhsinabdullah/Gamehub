import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home/Home";
import AllGames from "../pages/AllGames/AllGames";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,   
        element: <Home />
      },
      {
        path: '/all-games',   
        element: <AllGames />
      },
      {
        path: '/login',   
        element: <Login />
      },
      {
        path: '/signup',   
        element: <Register />
      }
    ]
  }
]);

export default router;
