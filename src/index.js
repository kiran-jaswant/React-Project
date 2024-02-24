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
import Plant from './views/Plant/Plant.js';
import Cart from './views/Cart/Cart.js';
import Accessories from './views/Acessories/Acessories';


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
    path:'/cart',
    element:<Cart/>
  },
  {
    path : '/plant/:id',
    element: <Plant />
  },
  {
    path:'/services/:id',
    element:<h1>ALL SERVICES</h1>
  },
  {
    path : '*',
    element: <h1> The Page is not Found ! </h1>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);



