import React from 'react'
import data from '../data.json'
import {useState,useEffect} from 'react'
import Products from './Products'

function MainContent() {
    const [products , setProducts] = useState([])
    const [size , setSize] = useState("")
    const [sort , setSort] = useState("")

    useEffect(() => {
        setProducts(data.products)
    })    

    console.log(data)
    return (
        <div className='main'>
            <ul className='products'>
                <Products products={products}/>
            </ul>
            <div className='sidebar'>
                Sidebar
            </div>
        </div>
    )
}

export default MainContent
