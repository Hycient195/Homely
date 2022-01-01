import { SIGN_UP, SIGN_IN, FETCH_VENDOR_PROPERTIES, UPDATE_VENDOR_PROFILE } from '../actionTypes/actionTypes'

const vendorReducer = (state = [], action) => {
    switch(action.type){
        case SIGN_IN:
            return action.payload

        case FETCH_VENDOR_PROPERTIES:
            return action.payload

        case UPDATE_VENDOR_PROFILE:
            return action.payload
        default:
            return state
    }
}

export default vendorReducer