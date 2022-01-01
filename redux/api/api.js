import axios from 'axios'
const PORT = process.env.PORT || 7000

// const API = axios.create({ baseURL : `http://localhost:${PORT}/api`})
const API = axios.create({ baseURL : `http://localhost:7000/api`})

/** Querying local storage to obtain logged in user credentials */
API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

/* Queries on the property model */
export const fetchProperties = () => API.get('/property')
export const fetchSingleProperty = (propertyName, _id) => API.get(`/property/${propertyName}?_id=${_id}`)
export const updateProperty = (id, propDetails) => API.patch(`/property/update/${id}`, propDetails)
export const uploadProperty = (propDetails) => API.post(`/property/create`, propDetails)
export const sortByParameter = (data) => API.post(`/property/sort`, data)
export const searchProperties = (query) => API.post(`/property/search`, query)

export const deleteProperty = () => API.delete()
export const sortPropertyByParameter = () => API.get()

/* Queries on the vendor model */
export const sign_up = (vendorDetails) => API.post('/vendor/sign_up', vendorDetails)
export const sign_in = (vendorDetails) => API.post('/vendor/sign_in', vendorDetails)
export const deleteVendorProfile = (vendorId) => API.delete('/vendor/delete', vendorId)
export const updateVendorProfile = (id, vendorUpdate) => API.patch(`/vendor/update/${id}`, vendorUpdate)
export const fetchVendorProperties = (id) => API.get(`/vendor/fetch_properties/${id}`)