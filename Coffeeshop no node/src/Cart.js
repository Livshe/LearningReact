import React, {useEffect, useState} from "react";

export default function Cart(props){
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (props.itemToCart){
            setCart([...cart, props.itemToCart]);
        }
    }, [props.itemToCart]);
    return (
        <div>
            <div>Cart</div>
            {
                cart.map((item, index) => (
                    <div style={{display: 'flex'}} key={index}>
                        <div>{item}</div>
                    </div>
                ))
            }
        </div>
    )
}