import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Flowers from './views/Flowers/Flowers';
import Decorative from './views/Decorative/Decorative';
import Gardening from './views/Gardening/Gardening';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Acessories from './views/Acessories/Acessories';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

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
    path:'/Acessories',
    element:<Acessories />

  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


