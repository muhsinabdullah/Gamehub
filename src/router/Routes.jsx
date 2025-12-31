import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home/Home";
import AllGames from "../pages/AllGames/AllGames";

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
      }
    ]
  }
]);

export default router;
