import RootReducer from './reducers'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const Store = createStore(RootReducer, applyMiddleware(thunk))

export default Store
