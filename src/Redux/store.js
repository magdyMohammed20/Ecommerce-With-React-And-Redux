import {createStore , applyMiddleware ,combineReducers , compose} from 'redux'
import thunk from 'redux-thunk'
import {productsReducer} from './ProductsReducers'
import {cartReducer} from './CartReducers'
import { orderReducer } from './OrderReducers'

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        products : productsReducer,
        cart: cartReducer,
        order: orderReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store