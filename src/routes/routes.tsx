import {
    createBrowserRouter,
 
  } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <h1>Home</h1>,
        },
        
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
    ]},
    {
        path: "/login",
        element: <Login/>,

}

]);

    export default router;