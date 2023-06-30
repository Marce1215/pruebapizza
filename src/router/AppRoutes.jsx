import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Carro from '../pages/Carro';
import DetPizza from '../pages/DetPizza';
const AppRoutes =()=>{

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carro" element={<Carro />} />
            <Route path="/DetPizza" element={<DetPizza />} />
        </Routes>
    )
}

export default AppRoutes;