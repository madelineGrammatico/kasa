import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider } from "react-router-dom"
import './sass/index.scss';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Rental, {rentalLoader} from './pages/Rental';

// import {rentalLoader} from './routes/rentalLoader';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: async () => {
       const res = await fetch("./logement.json");
       return  res.json()
    },
    children: [
      {
        element: <Rental/>,
        path: "rental/:id",
        loader: rentalLoader
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/*",
        element: <Page404/>
      }
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
