import React from 'react'

function Cart({cartItems , removeCartItem}) {
    return (
        <div>
            <div className='cart-quantity'>
                {
                    cartItems.length > 0 ? <div> You Have {cartItems.length} Items In Cart</div> : <div> No Items In Cart </div>
                }
            </div>
            {
                cartItems.length > 0 && <div className='cart-container'>
                <ul>
                    {
                        cartItems.map(item => {
                            return <li key={item.id}>
                                <div className='product-image'>
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='product-details'>
                                    <div>{item.title}</div>
                                    <div className='product-details2'>
                                        <p>${item.price} x {item.count}</p>
                                        {/*<p>Total Price : ${item.count * item.price}</p>*/}
                                        <button onClick={() => removeCartItem(item)}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <div className='total-cart-price'>
                    <div>
                        Total : 
                        $ 
                        {
                            cartItems.reduce((a,b) => Math.ceil(a + b.price * b.count) , 0)
                        }
                    </div>
                    <button className='primary'>Proceed</button>
                </div>
            </div>
            }
        </div>
    )
}

export default Cart
