import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY, SORT_BY_PARAMETER, SEARCH_PROPERTIES } from '../actionTypes/actionTypes'

export default (state = [], action) =>{
    switch(action.type){
        case FETCH_PROPERTIES:
            return action.payload

        case FETCH_SINGLE_PROPERTY:
            return action.payload

        case SORT_BY_PARAMETER:
            return action.payload
            
        case SEARCH_PROPERTIES:
            return action.payload
        default:
            return state
    }
}