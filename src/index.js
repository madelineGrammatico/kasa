import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider } from "react-router-dom"
import './sass/index.scss';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import {Rental} from './pages/Rental';

import dataRent from "./data/logements.json"
import dataAbout from "./data/about.json"

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: () => { return dataRent }
  },
  {
    path: "about",
    element: <About/>,
    loader:() => { return dataAbout }
  },
  {
    path: "rental/:id",
    loader: ({params}) => { return dataRent.filter((rental) => (
        rental.id === params.id.slice(1) ))
    },
    element: <Rental/>,
  }, 
  {
    path: "*",
    element: <Page404/>
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
