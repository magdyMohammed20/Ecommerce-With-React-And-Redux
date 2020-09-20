import React from 'react'
import {connect} from 'react-redux'
import {filterProducts , sortProducts} from '../Redux/ProductsActions'

function Filter(props) {
    const {sort , size , filterProducts , sortProducts , filteredProducts , products} = props

    return (
        !props.filteredProducts ? <div className='filter'>Loading...</div> : (
            <div className='filter'>
                <div className='filter-result'>{filteredProducts.length} Products</div>
                <div className='filter-order'>
                    Order
                    <select value={sort} onChange={(e) => sortProducts(filteredProducts , e.target.value)}>
                        <option value='latest'>Latest</option>
                        <option value='lowest'>Lowest</option>
                        <option value='highest'>Highest</option>
                    </select>
                </div>
                <div className='filter-result'>
                    Filter 
                    <select value={size} onChange={(e) => filterProducts(products , e.target.value)}>
                        <option value=''>ALL</option>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>
                    </select>
                </div>
            </div>
        )
    )
}

export default connect(state => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
}) , {
    filterProducts,
    sortProducts
})(Filter)
