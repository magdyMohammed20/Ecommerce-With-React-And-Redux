import React , {useState} from 'react'
import Fade from 'react-reveal/Fade'
import {connect} from 'react-redux'
import {removeCartItem} from '../Redux/CartActions'

function Cart(props) {
    const {cartItems , removeCartItem} = props
    const [showCheckout , setShowCheckout] = useState(false)
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [address , setAddress] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        
        const order = {
            name,
            email,
            address
        }

        //createOrder(order)
    }

    const handleChange = e => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else{
            setAddress(e.target.value)
        }
    }
    return (
        <div>
            <div className='cart-quantity'>
                {
                    cartItems.length > 0 ? <div> You Have {cartItems.length} Items In Cart</div> : <div> No Items In Cart </div>
                }
            </div>
            {
                cartItems.length > 0 && <div className='cart-container'>
                <Fade left cascade>
                    <ul className='cart-list'>
                        {
                            cartItems.map(item => {
                                return <li key={item.id}>
                                    <div className='product-image'>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div className='product-details in-cart'>
                                        <div>{item.title}</div>
                                        <div className='product-details2'>
                                            <p>${item.price} x {item.count}</p>
                                            {/*<p>Total Price : ${item.count * item.price}</p>*/}
                                            <button onClick={() => {
                                                
                                                removeCartItem(item)
                                                if(JSON.parse(localStorage.getItem('cartItems')).length === 0){
                                                    setShowCheckout(false)
                                                }
                                            }}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </Fade>
                <div className='total-cart-price'>
                    <div>
                        Total : 
                        $ 
                        {
                            cartItems.reduce((a,b) => Math.ceil(a + b.price * b.count) , 0)
                        }
                    </div>
                    <button className='primary' onClick={() => setShowCheckout(true)}>Proceed</button>
                </div>
            </div>
            }

            {
                showCheckout && (
                    <div className='checkout'>
                        <form onSubmit={handleSubmit}>
                            <Fade right cascade>
                            <ul>
                                <li>
                                    <label>Name</label>
                                    <input 
                                        type='text'
                                        name='name'
                                        required
                                        onChange={handleChange}
                                    />
                                </li>
                                <li>
                                    <label>Email</label>
                                    <input 
                                        type='email'
                                        name='email'
                                        required
                                        onChange={handleChange}
                                    />
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input 
                                        type='text'
                                        name='address'
                                        required
                                        onChange={handleChange}
                                    />
                                </li>
                                <li>
                                    <button type='submit' className='primary'>Submit</button>
                                </li>
                            </ul>
                            
                            </Fade>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,

}) , {
    removeCartItem
})(Cart)
