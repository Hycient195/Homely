import * as api from '../api/api'
import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY, SORT_BY_PARAMETER, SEARCH_PROPERTIES } from '../actionTypes/actionTypes'

export const fetchProperties = () => async(dispatch) =>{
    try {
        const properties = await api.fetchProperties()
        console.log(properties)
        dispatch({type : FETCH_PROPERTIES, payload : properties})
    } catch (error) {
        console.log(error)
    }
}

export const fetchSingleProperty = (propertyName, _id) => async(dispatch) =>{
    try {
        const property = await api.fetchSingleProperty(propertyName, _id)
        // console.log(property)
        dispatch({type : FETCH_SINGLE_PROPERTY, payload : property})
    } catch (error) {
        console.log(error)
    }
}

export const sortByParameter = (data) => async(dispatch) =>{
    try {
        const property = await api.sortByParameter(data)
        // console.log(property)
        dispatch({ type : SORT_BY_PARAMETER, payload : property})
    } catch (error) {
        console.log(error)
    }
}

export const searchProperties = (query) => async(dispatch) =>{
    // console.log(query)
    try {
        const properties = await api.searchProperties(query)
        // console.log(properties)
        // if(properties.data == []) dispatch({ type : SEARCH_PROPERTIES, payload : `No result found for ${query}`})
        // console.log(properties)
        dispatch({ type : SEARCH_PROPERTIES, payload : properties})
    } catch (error) {
        // dispatch({ type : SEARCH_PROPERTIES, payload : `No result found for ${query}`})
        console.log(error)
    }
}