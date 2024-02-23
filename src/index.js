import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
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
<<<<<<< HEAD
import Plant from './views/Plant/Plant.js';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
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
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
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
    path : '/plant/:id',
    element: <Plant />
  },
  {
    path : '*',
    element: <h1> The Page is not Found ! </h1>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

=======
import Accessories from './views/Acessories/Acessories';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

 const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
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
      path:'/Accessories',
      element:<Accessories />
  
    },
    {
      path:"*",
      element:<h1>Not Found</h1>
    }
    
 ]);

root.render(<RouterProvider router={router}/>)
>>>>>>> 258eaea9bfff6f47c364b36b014c4b988afa19d2


