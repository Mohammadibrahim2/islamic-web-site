import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

import ScholarsLayout from "../../ServicesLayout/ScholarsLayout/ScholarsLayout";
import SingleScholarsDetails from "../../ServicesLayout/ScholarsLayout/SingleScholarsDetails";
import ServicesHeader from "../../ServicesLayout/ServicesHeader/ServicesHeader";
import ServicesLayout from "../../ServicesLayout/ServicesLayout";
import SingleServiceDetails from "../../ServicesLayout/ServicesSectionOfService/SingleServices";



export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
       children:[


            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                pathe:"/services",
                element:<ServicesLayout></ServicesLayout>,
                children:[
        
                    {
                        path:"/services/:id",
                        element:<SingleServiceDetails></SingleServiceDetails>,
                        loader:({params})=>fetch(`https://islamic-web-site-server-mohammadibrahim2.vercel.app/services/${params.id}`)
                    },
                    
                    {
                        path:"/services/:id",
                        element:<ServicesHeader></ServicesHeader>,
                        loader:({params})=>fetch(`https://islamic-web-site-server-mohammadibrahim2.vercel.app/services/${params.id}`)
                    }
                ]
            },
            {
                pathe:"/schalars",
                element:<ScholarsLayout></ScholarsLayout>,
                children:[
        
                    {
                        path:"/schalars/:id",
                        element:<SingleScholarsDetails></SingleScholarsDetails>,
                        loader:({params})=>fetch(` https://islamic-web-site-server.vercel.app/${params._id}`)
                      
                    },
                    
                    
                ]
            }
            
           
        ]
    },
   
])