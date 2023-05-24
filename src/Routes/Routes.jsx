import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pagas/Home/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Allproduct from "../Pagas/Allproducts/Allproduct";
import Login from "../Userfrom/Login";
import RagisterFrom from "../Userfrom/RagisterFrom";



const Routes = createBrowserRouter([
     {
       path: "/",
       element:<Main></Main>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'/allproduct',
               element:<Allproduct></Allproduct>
          },
          {
               path:'/login',
               element:<Login></Login>
          },
          {
               path:'/ragister',
               element:<RagisterFrom></RagisterFrom>
          }
       ]
     },
   ]);

export default Routes;