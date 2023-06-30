import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/UseFetch";

export const ContextPizza = createContext();
export const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [carro, setcarro] = useState([]);

    const { data, loading, error } = useFetch('/pizzas.json');
    console.log(data);
    useEffect(() => {
        if (data) {
            setPizzas(data);
        }
    }, [data]);
    const addTocarro = (pizza) => {
        const findProductIndex = carro.findIndex((item) => item.id === pizza.id);
        const pruduct = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            count: 1,
            desc: pizza.desc,
            img: pizza.img
        }
        if (findProductIndex >= 0) {
            carro[findProductIndex].count++;
            setcarro([...carro]);
        } else {
            setcarro([...carro, pruduct]);
        }
    }
    const increment = (index) => {
        carro[index].count++;
        setcarro([...carro]);
    }
    const decrement = (index) => {
        if (carro[index].count === 1) {
            carro.splice(index, 1);
        } else {
            carro[index].count--;
        }
        setcarro([...carro]);
    }
    const total = carro.reduce((acc, item) => acc + (item.price * item.count), 0);

    const PizzasProviderValues={
        pizzas,
        carro,
        loading,
        setcarro,
        addTocarro,
        increment,
        decrement,
        total
    }

    return (
        <ContextPizza.Provider value={PizzasProviderValues}>
            {children}
        </ContextPizza.Provider>
    )

}