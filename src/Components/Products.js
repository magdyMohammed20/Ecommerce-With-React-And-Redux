import React from 'react'

function Products({products}) {
    return (
        <>
            {
                products.length > 0 ? (
                    products.map(product => {
                        return <li key={product.id}>
                            <div className='product-data'>
                                <a href='#'>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className='product-price'>
                                    <div className='price'>
                                        $ {product.price}
                                    </div>
                                    <button className='button primary'>Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    })
                ) : (
                    <div className='no-results'>No Results Founded</div>
                )
            }
        </>
    )
}

export default Products
