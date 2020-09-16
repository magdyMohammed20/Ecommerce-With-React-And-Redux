import React from 'react'
import {useState,useEffect} from 'react'
import Products from './Products'
import Filter from './Filter'
import Cart from './Cart'
import {connect} from 'react-redux'
import {fetchProducts} from '../Redux/ProductsActions'

function MainContent(props) {
    const [products , setProducts] = useState([])
    const [size , setSize] = useState("")
    const [sort , setSort] = useState("")
    const [cartItems , setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])

    useEffect(() => {
        props.fetchProducts()
        setProducts(props.products)
        
    } , [])    

    const sortProducts = (event) => {
        setSort(event.target.value)
        const pro = products.slice().sort((a,b) => 
            sort === 'lowest' ? a.price > b.price ? 1 : -1 : sort === 'highest' ? a.price < b.price ? 1 : -1 : a.id > b.id ? 1 : -1
        )
        setProducts(pro)
    }

    const filterProducts = (event) => {
        if(event.target.value === ""){
            setSize(event.target.value)
            setProducts(products)
        }else{
            setSize(event.target.value)
            const res = products.filter( product => product.availableSizes.indexOf(event.target.value) > 0)
            setProducts(res)
        }
    }

    const allCart = cartItems.slice()

    const addToCart = product => {
        let alreadyInCart = false

        allCart.forEach(item => {
            if(item.id === product.id){
                item.count++
                alreadyInCart = true
            }
        })

        if(!alreadyInCart){
            allCart.push({...product , count: 1})
        }

        setCartItems(allCart)
        localStorage.setItem("cartItems" , JSON.stringify(allCart))
    }


    const removeCartItem = (item) => {
        const allCart2 = cartItems.slice()
        setCartItems(allCart2.filter(cartItem => cartItem.id !== item.id))
        localStorage.setItem("cartItems" , JSON.stringify(allCart2.filter(cartItem => cartItem.id !== item.id)))
    }

    const createOrder = (order) => {
        alert(`Sure To Save ${order.name} Order`)
    }
    return (
        <div className='products-list'>
            <div className='main'>
                <ul className='products'>
                    <Filter count={!props.products ? [] : props.products.length } size={size} sort={sort} sortProducts={sortProducts} filterProducts={filterProducts}/>
                    
                    {
                        !props.products ? <div>loading</div> : (
                            <Products products={props.products} addToCart={addToCart}/>
                        )
                    }
                </ul>
                <div className='sidebar'>
                    <Cart cartItems={cartItems} removeCartItem={removeCartItem} createOrder={createOrder}/>

                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({products : state.products.items}) , {fetchProducts})(MainContent)
