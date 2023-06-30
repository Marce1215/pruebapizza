import React, { useContext } from 'react';
import { ContextPizza } from '../context/ContextPizza';

const Carro = () => {
    const { carro, increment, decrement, total } = useContext(ContextPizza);
    return (
        <div className='container'>
            <h1>Total Compra: {total}</h1>


            {carro.map((item, index) => (
                <div key={index}>
                    <div className='card mb-3'>
                        <h3 className='display-3'>{item.name}</h3>
                        <div className="row">
                            <div className='col-md-4' >
                                <img src={item.img} className='img-fluid' />
                            </div>
                            <div className='col-md-8'>
                                <p>{item.desc}</p>
                            </div>
                            <h2>${item.price}</h2>
                            <div className='text center'>
                                <button className='btn btn-primary ms-2' onClick={() => increment(index)}>+</button>
                                <span className='h3'> {item.count}</span>
                                <button className='btn btn-primary ms-2' onClick={() => decrement(index)}>-</button>
                            </div>

                        </div>

                    </div>
                </div>
            ))}

                </div>

            )
}
            export default Carro;