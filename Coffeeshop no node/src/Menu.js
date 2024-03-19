import React, {useState, useEffect} from 'react';
import Cart from './Cart';

export default function Menu(props){
    const [menu, setMenu] = useState(['a','b','c']);
    const [itemToCart, setItemToCart] = useState();

    useEffect(() => {
        if (props.item){
            setMenu([...menu, props.item]);
        }
    }, [props.item]);

    const addToCart = (item) => {
        setItemToCart(item);
    };

    return (
        <div>
            <div>Menu</div>
            {menu.map((item, index) => (
                <div style={{display: 'flex'}} key={index}>
                    <div>{item}</div>
                    <button onClick={() => addToCart(item)}>+</button>
                    </div>
            ))}
            <Cart itemToCart={itemToCart}/>
        </div>
    );
}