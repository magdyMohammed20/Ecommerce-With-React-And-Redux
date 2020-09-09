import React from 'react'
import data from '../data.json'
import {useState,useEffect} from 'react'
import Products from './Products'
import Filter from './Filter'

function MainContent() {
    const [products , setProducts] = useState([])
    const [size , setSize] = useState("")
    const [sort , setSort] = useState("")

    useEffect(() => {
        setProducts(data.products)
    })    

    const sortProducts = (sort) => {
        // impl
        console.log('sort changed')
    }

    const filterProducts = (size) => {
        // impl
        console.log('Size Changed')
    }
    return (
        <div className='products-list'>
            <div className='main'>
                <ul className='products'>
                    <Filter count={products.length} size={size} sort={sort} sortProducts={sortProducts} filterProducts={filterProducts}/>
                    <Products products={products}/>
                </ul>
                <div className='sidebar'>
                    Sidebar
                </div>
            </div>
        </div>
    )
}

export default MainContent
