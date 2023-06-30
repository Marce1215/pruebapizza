import React, { useContext } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import DetallePizza from '../components/DetallePizza';

const Home = () => {
    const backgroundImage = './home.jpg';
    const { pizzas } = useContext(ContextPizza);
    return (
        
        <div className="">
            <img src="./home.jpg" alt="" width="1400px" height="150px"></img>
            {pizzas && (
                <div className="row gy-2">
                    {pizzas.map((pizza) => (
                          <div className="col-lg-4" key={pizza.id}>
                            <DetallePizza pizza={pizza} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Home;