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
    } , [])    

    const sortProducts = (event) => {
        setSort(event.target.value)
        const pro = products.slice().sort((a,b) => 
            sort === 'lowest' ? a.price > b.price ? 1 : -1 : sort === 'highest' ? a.price < b.price ? 1 : -1 : a.id > b.id ? 1 : -1
        )

        console.log(pro)
        setProducts(pro)
    }

    const filterProducts = (event) => {
        if(event.target.value === ""){
            setSize(event.target.value)
            setProducts(data.products)
        }else{
            setSize(event.target.value)
            const res = data.products.filter( product => product.availableSizes.indexOf(event.target.value) > 0)
            setProducts(res)
        }
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
