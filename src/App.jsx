import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import NavBar from "./components/NavBar";
import Rental from "./pages/Rental";


function App() {
    return (
        <div className="App">
            <NavBar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={ <About/>} />
                <Route path="/rental/:id" element={ <Rental/> }/>
                <Route path="/*" element={ <Page404/> } />
              </Routes>
        </div>
    )
}
export default App