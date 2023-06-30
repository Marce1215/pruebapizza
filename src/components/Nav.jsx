import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {ContextPizza} from '../context/ContextPizza';
import { FaShoppingCart } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaPizzaSlice } from 'react-icons/fa';

const Nav = () => {
  const {total}=useContext(ContextPizza);
    return(
     //   <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'blue-light' }} >
     <nav class="navbar navbar-expand-lg"  bg="primary" variant="dark">
    
        <div class="container-fluid">
          <Link className='navbar-brand'  to="/"> <FaPizzaSlice style={{ marginRight: '0.5rem' }} /> Pisseria Mamma Mia!</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              
            </ul>
            <Link className='btn btn-outline-primary' to="/carro"> <FaShoppingCart />&nbsp;Ir al Carro{total}</Link>
          </div>
        </div>
      </nav>
    )
}
export default Nav;