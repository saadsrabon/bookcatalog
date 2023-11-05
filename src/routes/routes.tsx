import {
    createBrowserRouter,
 
  } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import React from "react";
import ProductsDetails from "../components/ProductsDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
    {
        path:"details/:id",
        element:<ProductsDetails/>
    }
    ]},
    {
        path: "/login",
        element: <Login/>,

},
{
    path: "register",
    element: <Signup/>,
}

]);

    export default router;