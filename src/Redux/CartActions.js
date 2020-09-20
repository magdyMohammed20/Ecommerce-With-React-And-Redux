import {ADD_TO_CART , REMOVE_FROM_CART} from './types'

export const addToCart = (product) => (dispatch , getState) => {
    let cartItems = getState().cart.cartItems.slice()

    let alreadyInCart = false

    cartItems.forEach(item => {
        if(item.id === product.id){
            item.count++
            alreadyInCart = true
        }
    })

    if(!alreadyInCart){
        cartItems.push({...product , count: 1})
    }

    dispatch({
        type: ADD_TO_CART,
        payload: {cartItems}
    })

    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
}

export const removeCartItem = (product) => (dispatch,getState) => {
    let cartItems = getState().cart.cartItems.slice().filter(cartItem => cartItem.id !== product.id)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {cartItems}
    })
    localStorage.setItem("cartItems" , JSON.stringify(cartItems.filter(cartItem => cartItem.id !== product.id)))
}