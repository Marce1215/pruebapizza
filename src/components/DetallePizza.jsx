
import React, { useContext } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const DetallePizza = ({ pizza }) => {
    const { addTocarro } = useContext(ContextPizza);
    const navigate = useNavigate();
    const handleAddPizza = () => {
        navigate(`/DetPizza/${pizza.id}`)
      // navigate(`/DetPizza/`)
    }

    return (

        <div className="h-100 tarjeta">
            <div className='card'>
                <img src={pizza.img} alt={pizza.name} />
                <div className='card-body'>
                    <h4 className='display-3'>{pizza.name}</h4>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold' }}>Ingredientes</h4>
                    <ul style={{ textAlign: 'left' , listStyleType: 'none'}}>
                        {pizza.ingredients.map((ingredient, index) => (
                             <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPizzaSlice style={{ marginRight: '0.5rem' }} />
                                {ingredient}</li>
                        ))}
                    </ul>
                    <h5>${pizza.price}</h5>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => addTocarro(pizza)} className='btn btn-danger'> <FaShoppingCart />&nbsp;Añadir</button>
                        <button onClick={handleAddPizza} className='btn btn-primary ms-2' ><FontAwesomeIcon icon={faEye} />&nbsp;Ver Mas</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default DetallePizza;