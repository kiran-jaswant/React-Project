import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/flowers',
    element:<Floral/>
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
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);




