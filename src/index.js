import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Flowers from './views/Flowers/Flowers';
import Fruits from "./views/Fruits &Vegetables/Fruits";
import Decorative from './views/Decorative/Decorative';
import Gardening from './views/Gardening/Gardening';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';
import Register from './views/Register/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));

 const router = createBrowserRouter([
    {
        path:"/",
        element:<h1>Home</h1>
    },
    {
        path:"/about",
        element:<h1>About</h1>
    },
    {
        path:"/contact",
        element:<h1>Contact</h1>
    },
    {
      path:'/flowers',
      element:<Flowers/>
    },
    {
      path:'/decorative',
      element:<Decorative/>
    },
    {
      path:'/gardening',
      element:<Gardening/>
    },
    {
      path:'/fruits',
      element:<Fruits/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:"*",
      element:<h1>Not Found</h1>
    }
 ]);

 root.render(<RouterProvider router={router}/>);


