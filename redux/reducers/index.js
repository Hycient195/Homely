import { combineReducers } from 'redux'
import propertyReducer from './propertyReducer'
import vendorReducer from './vendorReducer'

const reducers = combineReducers({
    propertyReducer, vendorReducer
})

export default reducers

