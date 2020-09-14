import React from 'react'
import Fade from 'react-reveal/Fade'
function Products({products , addToCart}) {
    return (
        <Fade bottom cascade>
            <div>
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
                                    <button className='button primary' onClick={() => addToCart(product)}>Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    })
                ) : (
                    <div className='no-results'>No Results Founded</div>
                )
            }
            </div>
        </Fade>
    )
}

export default Products
