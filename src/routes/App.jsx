import {
    Routes,
    Route,
} from "react-router-dom"

import Home from '../pages/Home';
import About from '../pages/About';
import Page404 from '../pages/Page404';
import {Rental} from '../pages/Rental';
import { RootLayout } from "../pages/RootLayout";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/rental/:id" element={<Rental/>} />
                        <Route path="/*" element={<Page404/>} /> 
                </Route>
            </Routes>
        </>
    )
  }
