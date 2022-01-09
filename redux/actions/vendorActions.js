import * as api from '../api/api'

import {
    UPLOAD_PROPERTIY, UPDATE_PROPERTY, SIGN_UP, SIGN_IN, LOGOUT, FETCH_VENDOR_PROPERTIES, UPDATE_VENDOR_PROFILE
} from '../actionTypes/actionTypes'

export const uploadProperty = (property) => async(dispatch) => {
    try {
        const prop = await api.uploadProperty(property)
        // console.log(prop)
        dispatch({ type : UPLOAD_PROPERTIY, payload : prop})

    } catch (error) {
        console.log(error)
    }
}

export const updateProperty = (propertyId, propertyDetails) => async(dispatch) =>{
    try {
        const prop = await api.updateProperty(propertyId, propertyDetails)
        console.log(prop)
        dispatch({ type : UPDATE_PROPERTY, payload : prop})
    } catch (error) {
        console.log(error)
    }
}

export const sign_up = (userDetails, router) => async(dispatch) =>{
    try {
        const user = await api.sign_up(userDetails)
        // console.log(user)
        dispatch({ type : SIGN_UP, payload : user})
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const sign_in = (userDetails, router) => async(dispatch) =>{
    try {
        const user = await api.sign_in(userDetails)
        // console.log(user)
        localStorage.setItem('profile', JSON.stringify(user.data))
        dispatch({ type : SIGN_IN, payload : user})
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const logout = () => async(dispatch) =>{
    try {
        localStorage.removeItem('profile')
        console.log('User Logged out')
        dispatch({type : LOGOUT})
        window.location.reload()
        // history.go('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchVendorProperties = (id) => async(dispatch) =>{
    const loggedInVendor = JSON.parse(localStorage.getItem('profile')).result
    try {
        if(loggedInVendor._id == id){
            const properties = await api.fetchVendorProperties(id)
            // console.log(properties)
            dispatch({type : FETCH_VENDOR_PROPERTIES, payload : properties})
        }else{
            throw new Error('Unable to query; incorrect user credentials')
        }       
    } catch (error) {
        console.log(error)
    }
}

export const updateVendorProfile = (vendorId, vendorDetails) => async(dispatch) =>{
    const loggedInVendor = JSON.parse(localStorage.getItem('profile')).result;
    try {
        if(loggedInVendor._id == vendorId){
            const vendorProfile = await api.updateVendorProfile( vendorId, vendorDetails );
            console.log(vendorProfile)
            localStorage.removeItem('profile');
            localStorage.setItem('profile', JSON.stringify(vendorProfile.data))
            dispatch({ type : UPDATE_VENDOR_PROFILE, payload : vendorProfile })
        }
    } catch (error) {
        console.log(error)
    }
}