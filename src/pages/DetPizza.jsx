import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import DetallePizza from '../components/DetallePizza';

const DetPizza = () => {
  const { pizzas } = useContext(ContextPizza);
  console.log(pizzas);
  const {id} = useParams();
  const navigate = useNavigate();
  const pizza = pizzas.find((pizza) => pizza.id === parseInt(id));
  const handleAddPizza = () => {
    navigate(`/DetPizza/${pizza.id}`)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={pizza.img} alt={pizza.name} />
        </div>
        <div className="col-lg-6">
          <h1>{pizza.name}</h1>
          <h3>Ingredientes</h3>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Precio: ${pizza.price}</h3>
          <button onClick={handleAddPizza} className='btn btn-primary ms-2' >Ver Mas</button>
        </div>
      </div>
    </div>
  );
};

export default DetPizza;