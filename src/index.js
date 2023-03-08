import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider,
  Navigate, 
} from "react-router-dom"

import './sass/index.scss';

import { RootLayout } from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import {Rental} from './pages/Rental';

import dataRent from "./data/logements.json"
import dataAbout from "./data/about.json"

import reportWebVitals from './reportWebVitals';
import { rentalLoader } from './routes/rentalLoader';


const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace/>
      },
      {
        path: "rental/:id",
        loader: ({params}) => { return rentalLoader(params.id) },
        element: <Rental/>,
      }, 
      {
        path: "/home",
        element: <Home/>,
        loader: () => { return dataRent }
      },
      {
        path: "about",
        element: <About/>,
        loader:() => { return dataAbout }
      },
      {
        path: "*",
        element: <Page404/>
      },
    ],
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
