import React from 'react';
import { Link } from 'react-router-dom';
import DetallePizza from '../components/DetallePizza';



const DetallePizzaLink = ({ pizza }) => {
    return (
      <Link to={`/DetPizza/${pizza.id}`} className="btn btn-primary">
        Detalles
      </Link>
    );
  };
  
  export default DetallePizzaLink;