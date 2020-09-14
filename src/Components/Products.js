import React , {useState} from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

function Products({products , addToCart}) {
    const [currentProduct , setCurrentProduct] = useState(null)
    const [modalIsOpen , setModalIsOpen] = useState(false)

    const openModal = product => {
        setCurrentProduct(product)
        setModalIsOpen(true)
    }

    const closeModal = _ => {
        setCurrentProduct(null)
        setModalIsOpen(false)
    }

    return (
        <Fade bottom cascade>
            <div className='showProduct'>
            {
                products.length > 0 ? (
                    products.map(product => {
                        return <li key={product.id}>

                            <div>
                            {
                                currentProduct && (
                                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                                        <Zoom>
                                            <button className='close-modal' onClick={closeModal}>
                                                x
                                            </button>
                                            <div className='product-details3'>
                                                <img src={currentProduct.image} alt={currentProduct.title}/>
                                                <div className='product-data'>
                                                    <strong>{currentProduct.title}</strong>
                                                    <p className='product-desc'>{currentProduct.description}</p>
                                                    <p className='sizes'>
                                                        Available Sizes : 
                                                        {
                                                            currentProduct.availableSizes.map(x => {
                                                                return <span>
                                                                    <button className='primary size'>{x}</button>
                                                                </span>
                                                            })
                                                        }
                                                    </p>
                                                    <div className='panda'>
                                                        <p>Price : ${Math.ceil(currentProduct.price)}</p>
                                                        <button className='primary size' onClick={() => {
                                                            addToCart(currentProduct)
                                                            closeModal()
                                                        }}>
                                                            Add To Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Zoom>
                                    </Modal>
                                )
                            }
                            </div>

                            <div className='product-data'>
                                <a href={'#' + product.id} onClick={() => openModal(product)}>
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

Modal.setAppElement('body');
export default Products
