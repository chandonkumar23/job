import { createBrowserRouter } from "react-router-dom"
import Main from "../MainLayout/Main"
import Login from "../Login/Login"
import Home from "../Components/Home/Home"
import Signup from "../Signup/Signup"
import Dasboard from "../Dasboard/Dasboard"
import PrivetRoutes from "../ProviteRoute"
import Create from "../Create"
import Dasinfo from "../Dasboard/Dasinfo"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
           
           
           
          
        ],
      
    },
    {
        path:'dasboard',
        element:<PrivetRoutes><Dasboard></Dasboard></PrivetRoutes>,
        children:[
            {
                path:'dasboard/create',
                element:<PrivetRoutes><Create></Create></PrivetRoutes>
            },
            {
                path:'dasboard/dasinfo',
                element:<Dasinfo></Dasinfo>
            }
        ]
    }
      
 
])