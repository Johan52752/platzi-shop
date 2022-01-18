import React, { useState } from "react";

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) =>{
        setState({
            ...state,
            cart : [
                ...state.cart,
                {...payload, idCart:state.cart.length+1 , isAdd:false},
            ]
        })
    }
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((product)=>{
                if(product.idCart===payload.idCart){

                }
                return product.idCart!==payload.idCart
            })
        })
    }
    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;