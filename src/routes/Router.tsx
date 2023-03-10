import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import EndScreen from "../pages/EndScreen/EndScreen";
import Home from "../pages/Home/Home";

export default function Router(){
    const router = createBrowserRouter([
        {
        path: "/",
        element: <Home />},
        {
          path: "/carrinho",
          element: <Cart />,
        },
        {
          path: "/end",
          element: <EndScreen />,
        },

      ]);

    return(
        <RouterProvider router={router}/>
    )
}