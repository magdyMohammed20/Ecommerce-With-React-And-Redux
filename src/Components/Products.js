import React from 'react'

function Products({products}) {
    return (
        <>
            {
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
            }
        </>
    )
}

export default Products
